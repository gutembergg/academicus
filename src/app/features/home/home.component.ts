import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { first, tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { BookFindedService } from "src/app/services/book-finded/book-finded.service";
import { BooksService } from "src/app/services/books/books.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  listItems: any[] = [];
  dbBooks$: Observable<IBook[]>;
  subscription: Subscription;
  authorsList: string[] = [];
  seachFomat = "titre";

  user: any;

  constructor(
    private _firestore: BooksService,
    private _bookFindedService: BookFindedService,
    private _router: Router,
    private _authService: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.dbBooks$ = this._firestore.books$.pipe(
      tap((response) =>
        response.map((res) => this.authorsList.push(res.authors))
      )
    );
    this.subscription = this.dbBooks$.subscribe();

    this._authService.onAuthStateChanged((user) => (this.user = user));
  }

  async searchBooks($event: any) {
    const value = $event.target.value;

    if (value.length === 0) {
      this.listItems = [];
      return;
    }

    const books = await this.dbBooks$.pipe(first()).toPromise();

    if (this.seachFomat === "titre") {
      const items = books.filter((item) =>
        item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );

      this.listItems = items;
    }
    if (this.seachFomat === "authors") {
      const onceAuthorInList = new Set();

      this.authorsList.forEach((author) => {
        onceAuthorInList.add(author);
      });

      const showOnceAuthor = [...onceAuthorInList.values()];
      const list = showOnceAuthor.filter(Boolean);
      const items = list.filter((item: any) =>
        item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );

      this.listItems = items;
    }
  }

  segmentChanged($event: any) {
    this.seachFomat = $event.target.value;
  }

  selectedItem(item: IBook) {
    if (this.seachFomat === "titre") {
      const { id } = item;
      this.listItems = [];
      this._router.navigate(["/pages/home/book-finded", id]);
    } else {
      this.listItems = [];
      this._router.navigate(["/pages/home/author-finded", item]);
    }
  }

  signOut() {
    this._authService.signOut();
    this._router.navigate(["pages/login"]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
