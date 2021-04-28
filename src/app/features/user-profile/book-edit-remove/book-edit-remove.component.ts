import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { first, tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
import { BooksService } from "src/app/services/books/books.service";
import { CameraService } from "src/app/services/camera/camera.service";
import { UserBooksService } from "src/app/services/user-books/user-books.service";

@Component({
  selector: "app-book-edit-remove",
  templateUrl: "./book-edit-remove.component.html",
  styleUrls: ["./book-edit-remove.component.scss"]
})
export class BookEditRemoveComponent implements OnInit, OnDestroy {
  selectedBook$: IBook;
  bookId: string;
  form: FormGroup;
  categories: ICategory[];
  imageUrl: string;

  subscription: Subscription;

  constructor(
    private _userBookService: UserBooksService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _bookservice: BooksService,
    private _cameraService: CameraService
  ) {}

  // Si relance mil fois////////////////////////////////////
  ngOnInit() {
    this.form = this._formBuilder.group({
      title: ["", Validators.required],
      authors: ["", Validators.required],
      publisher: ["", Validators.required],
      image: [""],
      offer: ["", Validators.required],
      category: ["", Validators.required]
    });

    this._route.paramMap.subscribe((bookId) => {
      const id = bookId.get("id");
      this._userBookService.getUserBookById(id);
    });

    // Unsubscribe ///////////////////////////////////////
    this.subscription = this._userBookService.bookDetail$
      .pipe(
        tap((response) => this.form.patchValue(response)),

        tap((bookImgUrl) => (this.imageUrl = bookImgUrl?.image))
      )
      .subscribe((book) => (this.selectedBook$ = book));

    this.form.patchValue(this.selectedBook$);

    this._getCategories();
  }

  async _getCategories() {
    const categoriesList = await this._bookservice
      .getCategories()
      .pipe(first())
      .toPromise();

    this.categories = categoriesList;
  }

  async takePhoto() {
    const imageUrl = await this._cameraService.takePhoto();
    this.imageUrl = imageUrl;
  }

  onSubmit() {
    const formValues = {
      ...this.form.value,
      image: this.imageUrl
    };

    console.log("formValues: ", formValues);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
