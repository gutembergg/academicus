import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
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
    this.categoryList$ = this._firestore
      .getCategories()
      .pipe(tap((response) => (this.defaultCategory = response[0])));
  }

  selectCategory(category) {
    this.categorySelected = category;
    this._firestore.getBooksByCategory(category);
  }
}
