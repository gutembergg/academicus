import { Component, OnDestroy, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, Subscription } from "rxjs";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
import { BooksService } from "src/app/services/books/books.service";

@Component({
  selector: "app-books-detail",
  templateUrl: "./books-detail.component.html",
  styleUrls: ["./books-detail.component.scss"]
})
export class BooksDetailComponent implements OnInit, OnDestroy {
  theBook: any;
  newBook: IBook = {} as IBook;
  subscription: Subscription;
  categoryList$: Observable<ICategory[]>;

  constructor(
    private _firestore: BooksService,
    private _angularAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.subscription = this._firestore
      .get()
      .subscribe((response) => (this.theBook = response));
    this.categoryList$ = this._firestore.getCategories();
  }

  selectCategory($event) {
    this.newBook = {
      ...this.newBook,
      categoryId: $event.target.value
    };
  }

  async registerBook(value: string) {
    if (this.newBook.categoryId === undefined || value === "") {
      alert("Remplissez tout les champs");
      return;
    }

    const userID = await this._angularAuth.currentUser.then(
      (response) => response.uid
    );

    this.newBook = {
      ...this.newBook,
      userId: userID,
      title: this.theBook.title ? this.theBook.title : "",
      authors: this.theBook.authors ? this.theBook.authors : "",
      image: this.theBook.image,
      publisher: this.theBook.publisher ? this.theBook.publisher : "",
      offer: value
    };

    this._firestore.createBook(this.newBook);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
