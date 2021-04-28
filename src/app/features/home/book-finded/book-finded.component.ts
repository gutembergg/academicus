import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { BookFindedService } from "src/app/services/book-finded/book-finded.service";
import { InterestService } from "src/app/services/interest/interest.service";

@Component({
  selector: "app-book-finded",
  templateUrl: "./book-finded.component.html",
  styleUrls: ["./book-finded.component.scss"]
})
export class BookFindedComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription;
  book: IBook;

  constructor(
    private _bookFindedService: BookFindedService,
    private _formBuilder: FormBuilder,
    private _inerestService: InterestService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((bookId) => {
      const id = bookId.get("id");
      this._bookFindedService.getUserBookById(id);
    });

    this.subscription = this._bookFindedService.bookFinded$
      .pipe(tap((response) => response))
      .subscribe((_book) => (this.book = _book));

    this.form = this._formBuilder.group({
      offer: ["", Validators.required],
      contact: ["", Validators.required]
    });
  }

  onSubmit() {
    this._inerestService.createInterest(this.form.value, this.book.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
