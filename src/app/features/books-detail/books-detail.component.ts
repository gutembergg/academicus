import { Component, OnDestroy, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Observable, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
import { ISubCategorie } from "src/app/interfaces/ISubCategorie";
import { BooksService } from "src/app/services/books/books.service";

@Component({
  selector: "app-books-detail",
  templateUrl: "./books-detail.component.html",
  styleUrls: ["./books-detail.component.scss"]
})
export class BooksDetailComponent implements OnInit, OnDestroy {
  theBook: any;
  newBook: IBook = {} as IBook;
  subscription: Subscription;
  subscription2: Subscription;
  categoryList$: Observable<ICategory[]>;

  subCategoryList$: Observable<ISubCategorie[]>;

  form: FormGroup;
  formFormat = "offer";

  formCtr: FormGroup;

  subCategory$: Observable<any>;
  formSubCategories: any;
  isSubCategory = true;
  selectedSubCategory: string;

  constructor(
    private _firestore: BooksService,
    private _angularAuth: AngularFireAuth,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    public _toast: ToastController
  ) {
    this.form = this._formBuilder.group({
      category: ["", Validators.required],
      offer: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoryList$ = this._firestore.getCategories();

    this.subscription = this._route.queryParams.subscribe(
      (book) => (this.theBook = book)
    );
  }

  segmentChanged($event: any) {
    this.formFormat = $event.target.value;
    console.log("event: ", $event.target.value);
  }

  async registerBook$() {
    const userID = await this._angularAuth.currentUser.then(
      (response) => response.uid
    );

    this.newBook = {
      ...this.newBook,
      userId: userID,
      title: this.theBook.title ? this.theBook.title : "",
      authors: this.theBook.authors ? this.theBook.authors : "",
      image: this.theBook.image,
      publisher: this.theBook.publisher ? this.theBook.publisher : "",
      categoryId: this.form.value.category,
      offer: this.form.value.offer,
      interests: 0,
      researched: this.formFormat === "offer" ? false : true,
      subcategory: this.selectedSubCategory ? this.selectedSubCategory : ""
    };

    this._firestore.createBook(this.newBook);
    this.displayPopUp();
    this.form.reset();
  }

  async displayPopUp() {
    const toast = await this._toast.create({
      message: `Livre enregistré avec success`,
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
    this._firestore.getSubCategories(subcategory);
    this.subCategory$ = this._firestore.subCategories$;

    this.subscription2 = this._firestore.subCategories$
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
    this.subscription2.unsubscribe();
  }
}
