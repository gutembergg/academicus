import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
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

  constructor(private _firestore: BooksService) {}

  ngOnInit(): void {
    //revoir //////////////////////////////////
    this.categoryList$ = this._firestore
      .getCategories()
      .pipe(tap((response) => (this.defaultCategory = response[0])));
  }

  //revoir cette function////////////////////
  selectCategory(category) {
    this.categorySelected = category;

    this._firestore.getBooksByCategory(this.categorySelected);
    this.booksPerCategory = this._firestore.booksBycategory;
    console.log("this.categorySelected", this.booksPerCategory);
  }

  /* async selectCategory2(category) {
    this.categorySelected = category;

    this.booksPerCategory = await this._firestore.getBooksByCategory2(
      this.categorySelected
    );
    console.log("this.categorySelected", this.booksPerCategory);
  } */
}
