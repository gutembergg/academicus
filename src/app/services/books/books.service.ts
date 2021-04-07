import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
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
    this.books$ = this.colections.valueChanges();
    this.categories$ = this._firestore
      .collection<ICategory>("categories")
      .valueChanges();
  }

  createBook(book: IBook) {
    console.log("bookSErvice", book);
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

  //revoir cette function/////////////////////////////////////////
  getBooksByCategory(category: ICategory) {
    this._firestore
      .collection("books")
      .valueChanges()
      .subscribe((response: any) => {
        const result = response.filter(
          (item: IBook) => item.categoryId === category.name
        );
        this.categorySujet$.next(result);
      });
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
