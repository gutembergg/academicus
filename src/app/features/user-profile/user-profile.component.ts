import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { IBook } from "src/app/interfaces/IBook";
import { ApiBooksService } from "src/app/services/api-books.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  booksList: any;
  bookSelected: IBook = {
    title: "",
    authors: "",
    image: "",
    publisher: ""
  };

  constructor(private _apiService: ApiBooksService, private _router: Router) {}

  ngOnInit(): void {}

  async getApibooks(title: string) {
    await this._apiService.searchApiBook(title);
    this.booksList = this._apiService.data$;
  }

  seletedBook(book: any) {
    this.bookSelected = {
      ...this.bookSelected,
      title: book.volumeInfo.title,
      authors: Array.isArray(book.volumeInfo.authors)
        ? book.volumeInfo.authors[0]
        : book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks?.smallThumbnail,
      publisher: book.volumeInfo.publisher
    };

    const navigationData: NavigationExtras = {
      queryParams: this.bookSelected
    };

    this._router.navigate(["/pages/book-detail"], navigationData);
  }
}
