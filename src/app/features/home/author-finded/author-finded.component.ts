import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { AuthorsFindedService } from "src/app/services/authors-finded/authors-finded.service";

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
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this._route.queryParams.subscribe((response) => {
      this.author = response;
      this._authorsFindedService.getBooksByAuthor(response.author);
    });

    this.authorBooks = this._authorsFindedService.get();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
