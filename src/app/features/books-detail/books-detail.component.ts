import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IBook } from "src/app/interfaces/IBook";
import { BooksService } from "src/app/services/books/books.service";

const categoryList = [
  "droit",
  "medicine",
  "histoire",
  "economie",
  "astronomie"
];

@Component({
  selector: "app-books-detail",
  templateUrl: "./books-detail.component.html",
  styleUrls: ["./books-detail.component.scss"]
})
export class BooksDetailComponent implements OnInit {
  theBook: IBook;
  categories: string[] = categoryList;
  newBook: IBook = {} as IBook;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _firestore: BooksService
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((book: IBook) => (this.theBook = book));
  }

  selectCategory($event) {
    this.newBook = {
      ...this.newBook,
      category: $event.target.value
    };
  }

  registerBook(value: string) {
    if (this.newBook.category === undefined || value === "") {
      alert("Remplissez tout les champs");
      return;
    }
    this.newBook = {
      ...this.newBook,
      title: this.theBook.title,
      authors: this.theBook.authors,
      image: this.theBook.image,
      publisher: this.theBook.publisher,
      offer: value
    };

    this._firestore.createBook(this.newBook);
    console.log("FinalForm", this.newBook);
  }
}
