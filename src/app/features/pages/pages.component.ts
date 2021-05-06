import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { UserBooksService } from "src/app/services/user-books/user-books.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"]
})
export class PagesComponent implements OnInit {
  user: any;
  interestesBook: boolean;
  interestesBookResearched: boolean;

  constructor(
    private _authService: AngularFireAuth,
    private _userBookService: UserBooksService
  ) {}

  async ngOnInit() {
    this._authService.onAuthStateChanged(async (user) => {
      this.user = user;
      if (user) {
        await this._userBookService.getUserBooks();

        this._userBookService.bookInterest$.subscribe((res) => {
          this.interestesBook = res;
        });

        this._userBookService.getUserResearchedBooks().then((books) =>
          this._userBookService.researchedBooks$
            .pipe(
              tap((response) =>
                response.map((book: IBook) => {
                  if (book.interests > 0) {
                    this.interestesBookResearched = true;
                  }
                  return book;
                })
              )
            )
            .subscribe((res) => res)
        );
      }
    });
  }
}
