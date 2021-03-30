import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiBooksService } from "src/app/services/api-books.service";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent implements OnInit {
  books$: Observable<any>;

  constructor(private _apiBooksService: ApiBooksService) {}

  ngOnInit(): void {
    this.books$ = this._apiBooksService
      .getBook("2001 l'odyssey de l'espace")
      .pipe(map((book) => book));
  }
}
