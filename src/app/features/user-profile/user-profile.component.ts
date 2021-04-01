import { Component, OnInit } from "@angular/core";
import { ApiBooksService } from "src/app/services/api-books.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  booksList: any;

  constructor(private _apiService: ApiBooksService) {}

  ngOnInit(): void {}

  async getApibooks(title: string) {
    await this._apiService.searchApiBook(title);
    this.booksList = this._apiService.data$;
  }

  seletedBook(book: any) {
    this._apiService.bookSelected(book);
    console.log(book);
  }
}
