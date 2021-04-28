import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
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

  constructor(
    private _apiService: ApiBooksService,
    private _router: Router,
    private _bookService: BooksService,
    public cameraService: CameraService,
    private _formBuilder: FormBuilder,
    private _angularAuth: AngularFireAuth
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

    this._bookService.set(this.bookSelected);

    this._router.navigate(["/pages/book-detail"]);
  }

  toggleBookForm() {
    this.toggleForm = !this.toggleForm;
  }

  async takePhoto() {
    const imgUrl = await this.cameraService.takePhoto();
    this.photoUrl = imgUrl;
  }

  async onSubmit() {
    const userID = await this._angularAuth.currentUser.then(
      (response) => response.uid
    );
    const _book = {
      ...this.form.value,
      userId: userID,
      image: this.photoUrl
    };

    this._bookService.createBook(_book);
    this.toggleForm = false;
  }

  getEvent($event) {
    this.booksList = [];
  }
}
