import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { UserBooksService } from "src/app/services/user-books/user-books.service";

@Component({
  selector: "app-user-books",
  templateUrl: "./user-books.component.html",
  styleUrls: ["./user-books.component.scss"]
})
export class UserBooksComponent implements OnInit {
  slideOpts = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  };

  userBooks$: Observable<IBook[]>;

  constructor(
    private _userBooksService: UserBooksService,
    private _router: Router
  ) {}

  async ngOnInit() {
    await this._userBooksService.getUserBooks();

    this._userBooksService.userBooks$.subscribe(
      (res: any) => (this.userBooks$ = res)
    );
  }

  selectBook(id: string) {
    this._userBooksService.getUserBookById(id);
    /*  this._router.navigate(["pages/user-profile/user-book"]); */
  }
}
