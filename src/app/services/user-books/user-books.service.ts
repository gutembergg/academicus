import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";

@Injectable({
  providedIn: "root"
})
export class UserBooksService {
  colections: AngularFirestoreCollection<any>;

  _userBooks$: BehaviorSubject<any> = new BehaviorSubject([]);
  userBooks$: Observable<any[]> = this._userBooks$.asObservable();

  _bookDetail$: BehaviorSubject<any> = new BehaviorSubject(null);
  bookDetail$: Observable<any> = this._bookDetail$.asObservable();

  _bookInterest$: BehaviorSubject<any> = new BehaviorSubject(null);
  bookInterest$: Observable<any> = this._bookInterest$.asObservable();

  constructor(
    private _firestore: AngularFirestore,
    private _angularAuth: AngularFireAuth
  ) {}

  async getUserBooks() {
    const userID = await this._angularAuth.currentUser.then(
      (response) => response.uid
    );

    this._firestore
      .collection<IBook>("books", (ref) =>
        ref.where("userId", "==", `${userID}`).where("researched", "==", false)
      )
      .stateChanges(["added", "modified", "removed"])
      .pipe(
        map((response) =>
          response.map((res) => {
            const data = res.payload.doc.data();
            const type = res.type;
            const id = res.payload.doc.id;
            return { id, ...data, type };
          })
        )
      )
      .subscribe((newData) => {
        const currentState = this._userBooks$.value.filter(
          (book) => !newData.find((newBook) => newBook.id === book.id)
        );

        const newState = [
          ...currentState,
          ...newData.filter((data) => data.type !== "removed")
        ].map((book) => {
          delete book.type;

          return book;
        });
        console.log("User book New List", newState);

        newState.map((book) => {
          if (book.interests > 0) {
            console.log("interest: ", book.interests);

            this._bookInterest$.next(true);
          }
        });

        this._userBooks$.next(newState);
      });
  }

  getUserBookById(bookId: string) {
    this._firestore
      .doc(`books/${bookId}`)
      .valueChanges({ idField: "id" })
      .subscribe((res) => this._bookDetail$.next(res));
  }

  deleteBook(id: string) {
    this._firestore
      .collection("books")
      .doc(id)
      .delete()
      .then((response) => console.log("delete Function"))
      .catch((error) => console.log("Error: ", error));
  }
}
