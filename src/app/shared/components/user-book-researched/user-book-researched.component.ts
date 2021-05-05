import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { UserBooksService } from "src/app/services/user-books/user-books.service";

@Component({
  selector: "app-user-book-researched",
  templateUrl: "./user-book-researched.component.html",
  styleUrls: ["./user-book-researched.component.scss"]
})
export class UserBookResearchedComponent implements OnInit, OnDestroy {
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

  subscription: Subscription;

  _researchedBooks$: Observable<any>;

  constructor(
    private _userBookService: UserBooksService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._userBookService.getUserResearchedBooks();

    this.subscription = this._userBookService.researchedBooks$
      .pipe(tap((book) => (this._researchedBooks$ = book)))
      .subscribe((res) => res);
  }

  selecteBook(bookId: string) {
    this._router.navigate(["/pages/user-profile/user-book", bookId]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
