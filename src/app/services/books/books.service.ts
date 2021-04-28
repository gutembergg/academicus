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

  booksSubject$: BehaviorSubject<any> = new BehaviorSubject([]);
  books$: Observable<any[]> = this.booksSubject$.asObservable();

  colections: AngularFirestoreCollection<any>;

  categories$: Observable<ICategory[]>;
  booksBycategory: any;

  categorySujet$: BehaviorSubject<any> = new BehaviorSubject(null);
  booksBycategory$: Observable<any> = this.categorySujet$.asObservable();

  constructor(private _firestore: AngularFirestore) {
    this.colections = this._firestore.collection("books");
    this.colections
      .stateChanges(["added", "modified", "removed"])
      .pipe(
        map((response) =>
          response.map((res) => {
            const data = res.payload.doc.data();
            const id = res.payload.doc.id;
            console.log("Book service!!!!!!!");
            return { id, ...data };
          })
        )
      )
      .subscribe((newData) => {
        const currentState = this.booksSubject$.value.filter(
          (product) => !newData.find((newP) => newP.id === product.id)
        );
        const newState = [...currentState, ...newData];

        this.booksSubject$.next(newState);
      });

    this.categories$ = this._firestore
      .collection<ICategory>("categories")
      .valueChanges();
  }

  /*   private _updateState(res: any[]): void {
    const currentState = this._items$.value;
    // using Set() to exclude duplicate item
    const SetList = new Set([...currentState, ...res]);
    const newState = [...SetList];
    this._items$.next(newState);
  } */

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

  //Revoir cette function ////////////////////////////////////////7
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

  updateBook({ id, ...data }) {
    this._firestore
      .collection<IBook>("books")
      .doc(id)
      .update(data)
      .then((response) => console.log("Success!!!"))
      .catch((error) => console.log("error: ", error));
  }

  deleteBook(id: string) {
    this._firestore
      .collection("books")
      .doc(id)
      .delete()
      .then((response) => console.log("book deleted"))
      .catch((error) => console.log("Error: ", error));
  }
}
