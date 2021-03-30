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
  booksList: Observable<any[]>;

  constructor(private _apiBooksService: ApiBooksService) {}

  ngOnInit(): void {
    this.books$ = this._apiBooksService
      .getBook("2001 l'odyssey de l'espace")
      .pipe(map((book) => book));
    this.getApibooks();
  }

  async getApibooks() {
    await this._apiBooksService.getBooks("2001 l'odyssey de l'espace");
    console.log(this._apiBooksService.data$);
    this.booksList = this._apiBooksService.data$;
  }
}
