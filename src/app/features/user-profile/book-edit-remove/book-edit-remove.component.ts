import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { UserBooksService } from "src/app/services/user-books/user-books.service";

@Component({
  selector: "app-book-edit-remove",
  templateUrl: "./book-edit-remove.component.html",
  styleUrls: ["./book-edit-remove.component.scss"]
})
export class BookEditRemoveComponent implements OnInit {
  selectedBook$: any;
  bookId: string;

  constructor(
    private _userBookService: UserBooksService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  // Si relance mil fois////////////////////////////////////
  ngOnInit() {
    this._route.params.subscribe((bookId) => {
      this._userBookService.getUserBookById(bookId.id);
      this._userBookService.bookDetail$.subscribe((resp) =>
        console.log("res", resp)
      );
    });

    /*   this._userBookService.getUserBookById("j8w4OoQhxA7iJwQCx1xC");
     this._userBookService.bookDetail$.subscribe((resp) =>
       console.log("res", resp)
     ); */
  }
}
