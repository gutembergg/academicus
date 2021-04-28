import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserBooksService } from "src/app/services/user-books/user-books.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"]
})
export class PagesComponent implements OnInit {
  user: any;
  interestedBook: boolean;

  constructor(
    private _authService: AngularFireAuth,
    private _userBookService: UserBooksService
  ) {}

  async ngOnInit() {
    this._authService.onAuthStateChanged(async (user) => {
      this.user = user;
      if (user) {
        console.log("isUsewr");
        await this._userBookService.getUserBooks();

        this._userBookService.isInterest$.subscribe(
          (res) => (this.interestedBook = res)
        );
      }
    });
  }
}
