import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { first, map } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  subjectData$: BehaviorSubject<any> = new BehaviorSubject(null);
  book$: Observable<IBook> = this.subjectData$.asObservable();

  books$: Observable<any[]>;
  colections: AngularFirestoreCollection<any>;

  categories$: Observable<ICategory[]>;
  booksBycategory: any;

  categorySujet$: BehaviorSubject<any> = new BehaviorSubject(null);
  booksBycategory$: Observable<any> = this.categorySujet$.asObservable();

  constructor(private _firestore: AngularFirestore) {
    this.colections = this._firestore.collection("books");
    this.books$ = this.colections.snapshotChanges().pipe(
      map((response) =>
        response.map((res) => {
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;

          return { id, ...data };
        })
      )
    );
    this.categories$ = this._firestore
      .collection<ICategory>("categories")
      .valueChanges();
  }

  createBook(book: IBook) {
    this._firestore
      .collection("books")
      .add(book)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  async getBooksByCategory(category: ICategory) {
    const result = await this.books$.pipe(first()).toPromise();

    const bookByCategory = result.filter(
      (response: IBook) => response.categoryId === category.name
    );
    this.categorySujet$.next(bookByCategory);
  }

  getCategories() {
    return this.categories$;
  }

  set(book: IBook) {
    return this.subjectData$.next(book);
  }

  get() {
    return this.book$;
  }
}