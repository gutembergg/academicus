import { Component, OnInit, OnDestroy } from "@angular/core";
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
  dbBooks$: Observable<IBook[]> = null;
  subscription: Subscription;
  authorsList: string[] = [];
  seachFomat = "titre";

  constructor(
    private _firestore: BooksService,
    private _bookFindedService: BookFindedService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.dbBooks$ = this._firestore.books$.pipe(
      tap((response) =>
        response.map((res) => this.authorsList.push(res.authors))
      )
    );
    this.subscription = this.dbBooks$.subscribe();
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
        item.title.toLocaleLowerCase().includes(value)
      );

      this.listItems = items;
    } else {
      const onceAuthorInList = new Set();

      this.authorsList.forEach((author) => {
        onceAuthorInList.add(author);
      });

      const showOnceAuthor = [...onceAuthorInList.values()];
      const list = showOnceAuthor;
      const items = list.filter((item: any) =>
        item.toLocaleLowerCase().includes(value)
      );

      this.listItems = items;
    }
  }

  segmentChanged($event: any) {
    this.seachFomat = $event.target.value;
    console.log("event", $event.target.value);
  }

  selectedItem(item: IBook) {
    if (this.seachFomat === "titre") {
      this._bookFindedService.set(item);
      this._router.navigate(["/pages/home/book-finded"]);
    } else {
      this._router.navigate(["/pages/home/author-finded"], {
        queryParams: { author: item }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
