import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavigationExtras, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
import { ISubCategorie } from "src/app/interfaces/ISubCategorie";
import { ApiBooksService } from "src/app/services/api-books.service";
import { BooksService } from "src/app/services/books/books.service";
import { CameraService } from "src/app/services/camera/camera.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  book: IBook;
  booksList: any;
  bookSelected: IBook = {
    title: "",
    authors: "",
    image: "",
    publisher: ""
  };
  categorySeleted: string;
  categoriesList: ICategory[];

  photoUrl: any;
  toggleForm = false;
  form: FormGroup;
  formFormat = "offer";
  selectedSubCategory: string;

  subCategory$: Observable<ISubCategorie>;
  isSubCategory = true;

  constructor(
    private _apiService: ApiBooksService,
    private _router: Router,
    private _bookService: BooksService,
    public cameraService: CameraService,
    private _formBuilder: FormBuilder,
    private _angularAuth: AngularFireAuth,
    public _toast: ToastController
  ) {}

  async ngOnInit() {
    this.form = this._formBuilder.group({
      userId: ["", Validators.required],
      title: ["", Validators.required],
      authors: ["", Validators.required],
      categoryId: ["", Validators.required],
      image: ["", Validators.required],
      publisher: ["", Validators.required],
      offer: ["", Validators.required]
    });

    this.categoriesList = await this._bookService
      .getCategories()
      .pipe(first())
      .toPromise();
  }

  //Get list from search bar ////////////////////////////////////
  async getApibooks(title: string) {
    const response = await this._apiService.searchApiBook(title);
    this.booksList = response.items;
  }

  seletedBook(book: any) {
    this.bookSelected = {
      ...this.bookSelected,
      title: book.volumeInfo.title,
      authors: Array.isArray(book.volumeInfo.authors)
        ? book.volumeInfo.authors[0]
        : book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks?.smallThumbnail,
      publisher: book.volumeInfo.publisher
    };

    const navigationData: NavigationExtras = {
      queryParams: this.bookSelected
    };
    this._router.navigate(["/pages/book-detail"], navigationData);
  }

  toggleBookForm() {
    this.toggleForm = !this.toggleForm;
  }

  async takePhoto() {
    const imgUrl = await this.cameraService.takePhoto();
    this.photoUrl = imgUrl;
  }

  selecteSubCategory($event) {
    this.selectedSubCategory = $event.detail.value;
  }
  _selectedCategory($event) {
    this.subCategoriesList($event.detail.value);
  }

  subCategoriesList(subcategory: string) {
    this._bookService.getSubCategories(subcategory);
    this.subCategory$ = this._bookService.subCategories$;

    this._bookService.subCategories$
      .pipe(
        tap(
          (response) =>
            (this.isSubCategory = response.length > 0 ? false : true)
        )
      )
      .subscribe((res) => res);
  }

  async onSubmit() {
    const userID = await this._angularAuth.currentUser.then(
      (response) => response.uid
    );
    const _book = {
      ...this.form.value,
      userId: userID,
      image: this.photoUrl,
      interests: 0,
      researched: this.formFormat === "offer" ? false : true,
      subcategory: this.selectedSubCategory ? this.selectedSubCategory : ""
    };

    this._bookService.createBook(_book);
    this.form.reset();
    this.displayPopUp();
    this.toggleForm = false;
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

  getEvent($event) {
    this.booksList = [];
  }

  segmentChanged($event) {
    this.formFormat = $event.target.value;
    console.log("event: ", $event);
  }
}
