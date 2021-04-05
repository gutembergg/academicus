import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { IBook } from "src/app/interfaces/IBook";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  books$: Observable<any[]>;
  colections: AngularFirestoreCollection<any>;

  constructor(private _firestore: AngularFirestore) {
    this.colections = this._firestore.collection("books");
    this.books$ = this.colections.valueChanges();
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
}
