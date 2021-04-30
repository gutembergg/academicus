import { Component, OnDestroy, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
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
  categoryList$: Observable<ICategory[]>;

  form: FormGroup;

  constructor(
    private _firestore: BooksService,
    private _angularAuth: AngularFireAuth,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder
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

  async registerBook$() {
    console.log("form: ", this.form.value);
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
      interests: 0
    };

    this._firestore.createBook(this.newBook);
  }

  /*  selectCategory($event) {
    this.newBook = {
      ...this.newBook,
      categoryId: $event.target.value
    };
  } */

  async registerBook(value: string) {
    if (this.newBook.categoryId === undefined || value === "") {
      alert("Remplissez tout les champs");
      return;
    }

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
      offer: value,
      interests: 0
    };

    this._firestore.createBook(this.newBook);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
