import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
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

  _defaultCategory: ICategory;

  categorySelected: any;
  booksPerCategory: any;

  booksPerCategory$: any;
  subCategory = false;

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

  /*  categoriesList$: any; */
  subCategories$: Observable<any>;

  constructor(
    private _firestore: BooksService,
    private _findedBook: BookFindedService,
    private _router: Router
  ) {}

  async ngOnInit() {
    this.categoryList$ = this._firestore.getCategories();
    const dafaultCategories = await this.categoryList$
      .pipe(first())
      .toPromise();

    this.defaultCategory = dafaultCategories[0];

    this.selectCategory(this.defaultCategory);

    this.subCategories$ = this._firestore.subCategories$;

    ////////////////////////////////////////////////////////////////
    /* this.categoriesList$ = this._firestore.getCategorys();

    const defaultCategory = await this.categoriesList$
      .pipe(
        first(),
        tap((bookCat) => console.log("bookCat", bookCat))
      )
      .toPromise();

    this._defaultCategory = defaultCategory[0];
    this.selectCategory(this._defaultCategory); */

    ///////////////////////////////////////////////////////////////
  }

  selectCategory(category) {
    this.categorySelected = category;

    this.booksPerCategory$ = this._firestore
      .getBooksByCategory$(category)
      .pipe(tap((res) => res));
  }
  /*  _selectCategory(id: string) {
    this.booksPerCategory$ = this._firestore
      ._getBooksByCategory$(id)
      .pipe(tap((res) => console.log("----->", res)));
  } */

  findedBook(bookId: string) {
    this._router.navigate(["/pages/home/book-finded", bookId]);
  }

  async loadData($event) {
    this.max = this.max + 10;
    $event.target.complete();
  }
}
