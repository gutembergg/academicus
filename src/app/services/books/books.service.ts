import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { first, map, tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  booksSubject$: BehaviorSubject<any> = new BehaviorSubject([]);
  books$: Observable<any[]> = this.booksSubject$.asObservable();

  colections: AngularFirestoreCollection<any>;

  categories$: Observable<ICategory[]>;
  booksBycategory: any;

  categorySujet$: BehaviorSubject<any> = new BehaviorSubject([]);
  booksBycategory$: Observable<any> = this.categorySujet$.asObservable();

  _researchedBooks: BehaviorSubject<any> = new BehaviorSubject([]);
  researchedBooks$: Observable<any> = this._researchedBooks.asObservable();

  constructor(private _firestore: AngularFirestore) {
    this.colections = this._firestore.collection("books", (ref) =>
      ref.where("researched", "==", false)
    );
    this.colections
      .stateChanges(["added", "modified", "removed"])
      .pipe(
        map((response) =>
          response.map((res) => {
            const data = res.payload.doc.data();
            const id = res.payload.doc.id;
            const type = res.type;
            return { id, ...data, type };
          })
        )
      )
      .subscribe((newData) => {
        const currentState = this.booksSubject$.value.filter(
          (book) => !newData.find((newP) => newP.id === book.id)
        );

        const newState = [
          ...currentState,
          ...newData.filter((book) => book.type !== "removed")
        ].map((data) => {
          delete data.type;

          return data;
        });

        this.booksSubject$.next(newState);
      });

    this.categories$ = this._firestore
      .collection<ICategory>("categories")
      .valueChanges();

    this._firestore
      .collection<IBook>("books", (ref) => ref.where("researched", "==", true))
      .stateChanges(["added", "modified", "removed"])
      .pipe(
        map((response) =>
          response.map((res) => {
            const data = res.payload.doc.data();
            const id = res.payload.doc.id;
            const type = res.type;
            return { id, ...data, type };
          })
        )
      )
      .subscribe((newList) => {
        const currentList = this._researchedBooks.value.filter(
          (book) => !newList.find((newB) => newB.id === book.id)
        );

        console.log("book removed reseached true!!!!!!!!!");
        const newState = [
          ...currentList,
          ...newList.filter((book) => book.type !== "removed")
        ].map((data) => {
          delete data.type;

          return data;
        });

        this._researchedBooks.next(newState);
      });
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

  getBooksByCategory$(category: ICategory) {
    return this.books$.pipe(
      map((books) =>
        books.filter((book: IBook) => book.categoryId === category.name)
      ),
      tap((response) => this.categorySujet$.next(response))
    );
  }

  getCategories() {
    return this.categories$;
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
      .then((response) => response)
      .catch((error) => console.log("Error: ", error));
  }
}
