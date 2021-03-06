import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Observable, Subscription } from "rxjs";
import { first, tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
import { IInterest } from "src/app/interfaces/IInterest";
import { ISubCategorie } from "src/app/interfaces/ISubCategorie";
import { BooksService } from "src/app/services/books/books.service";
import { CameraService } from "src/app/services/camera/camera.service";
import { InterestService } from "src/app/services/interest/interest.service";
import { UserBooksService } from "src/app/services/user-books/user-books.service";

@Component({
  selector: "app-book-edit-remove",
  templateUrl: "./book-edit-remove.component.html",
  styleUrls: ["./book-edit-remove.component.scss"]
})
export class BookEditRemoveComponent implements OnInit, OnDestroy {
  selectedBook$: IBook;
  _bookId: string;
  form: FormGroup;
  categories: ICategory[];
  imageUrl: string;

  interests: IInterest[];

  subscription: Subscription;

  isSubCategory = false;
  subCategory$: Observable<ISubCategorie>;
  formSubCategories: any;
  selectedSubCategory: string;

  constructor(
    private _userBookService: UserBooksService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _bookservice: BooksService,
    private _cameraService: CameraService,
    private _router: Router,
    private _interestService: InterestService,
    public _toast: ToastController
  ) {}

  // Si relance mil fois////////////////////////////////////
  ngOnInit() {
    this.form = this._formBuilder.group({
      title: ["", Validators.required],
      authors: ["", Validators.required],
      publisher: [""],
      image: [""],
      offer: ["", Validators.required],
      category: ["", Validators.required]
    });

    this._route.paramMap.subscribe((bookId) => {
      const id = bookId.get("id");
      this._userBookService.getUserBookById(id);
      this._interestService.getListInterstsByBookId(id);
    });

    // Unsubscribe ///////////////////////////////////////
    this.subscription = this._userBookService.bookDetail$
      .pipe(
        tap((response) => this.form.patchValue(response)),
        tap((bookImgUrl) => (this.imageUrl = bookImgUrl?.image)),
        tap((bookId) => (this._bookId = bookId?.id))
      )
      .subscribe((book) => (this.selectedBook$ = book));

    this._getCategories();

    this._interestService.interest$
      .pipe(tap((response) => response))
      .subscribe((res: any) => (this.interests = res));
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
      id: this._bookId,
      image: this.imageUrl,
      subcategory: this.selectedSubCategory ? this.selectedSubCategory : ""
    };

    this._bookservice.updateBook(formValues);
    this.displayPopUp();
  }

  deleteBook(id: string) {
    this._userBookService.deleteBook(id);
    this._router.navigate(["pages/user-profile"]);
  }

  deleteInterest(inetestId: string, bookId: string) {
    this._interestService.deleteInteret(inetestId, bookId);
  }

  async displayPopUp() {
    const toast = await this._toast.create({
      message: `Enregistr?? avec success`,
      position: "bottom",
      keyboardClose: true,
      color: "dark",
      duration: 2000
    });
    await toast.present();
  }

  selectSubCategory($event) {
    this.selectedSubCategory = $event.detail.value;
  }

  getSubcategory($event) {
    this.formSubCategories = $event.detail.value;
    this.subCategoriesList($event.detail.value);
  }

  subCategoriesList(subcategory: string) {
    this._bookservice.getSubCategories(subcategory);
    this.subCategory$ = this._bookservice.subCategories$;

    this._bookservice.subCategories$
      .pipe(
        tap(
          (response) =>
            (this.isSubCategory = response.length > 0 ? false : true)
        )
      )
      .subscribe((res) => res);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
