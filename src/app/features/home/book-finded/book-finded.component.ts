import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IBook } from "src/app/interfaces/IBook";
import { BookFindedService } from "src/app/services/book-finded/book-finded.service";

@Component({
  selector: "app-book-finded",
  templateUrl: "./book-finded.component.html",
  styleUrls: ["./book-finded.component.scss"]
})
export class BookFindedComponent implements OnInit {
  subscription: Subscription;
  book: IBook;

  constructor(private _bookFindedService: BookFindedService) {}

  ngOnInit(): void {
    this.subscription = this._bookFindedService
      .get()
      .subscribe((response) => (this.book = response));
  }
}
