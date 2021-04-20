import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
import { BookFindedService } from "src/app/services/book-finded/book-finded.service";
import { BooksService } from "src/app/services/books/books.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categoryList$: Observable<ICategory[]>;
  defaultCategory: ICategory;

  categorySelected: any;
  booksPerCategory: any;

  booksPerCategory$: Observable<any>;

  max = 10;
  min = 0;

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
    private _firestore: BooksService,
    private _findedBook: BookFindedService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //revoir //////////////////////////////////
    this.categoryList$ = this._firestore.getCategories().pipe(
      tap((response) => (this.defaultCategory = response[0])),
      tap((response) => this.selectCategory(response[0]))
    );
  }

  selectCategory(category) {
    this.categorySelected = category;

    this._firestore.getBooksByCategory(this.categorySelected);

    this.booksPerCategory$ = this._firestore.booksBycategory$;
  }

  findedBook(book: IBook) {
    this._findedBook.set(book);
    this._router.navigate(["/pages/home/book-finded"]);
  }

  async loadData($event) {
    this.max = this.max + 10;
    $event.target.complete();
  }
}
