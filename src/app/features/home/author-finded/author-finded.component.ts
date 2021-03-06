import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { AuthorsFindedService } from "src/app/services/authors-finded/authors-finded.service";
import { BookFindedService } from "src/app/services/book-finded/book-finded.service";

@Component({
  selector: "app-author-finded",
  templateUrl: "./author-finded.component.html",
  styleUrls: ["./author-finded.component.scss"]
})
export class AuthorFindedComponent implements OnInit, OnDestroy {
  authorBooks: Observable<any>;
  author: any;
  subscription: Subscription;

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

  constructor(
    private _authorsFindedService: AuthorsFindedService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _bookFindedService: BookFindedService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((author) => {
      const id = author.get("id");
      this.author = id;
      this._authorsFindedService.getBooksByAuthor(id);
    });

    this.authorBooks = this._authorsFindedService.booksByAuthor$;

    this.subscription = this.authorBooks.subscribe();
  }

  selectBook(bookId: string) {
    this._router.navigate(["/pages/home/book-finded", bookId]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
