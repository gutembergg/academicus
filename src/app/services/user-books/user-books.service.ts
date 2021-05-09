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

  _bookInterest$: BehaviorSubject<any> = new BehaviorSubject(false);
  bookInterest$: Observable<any> = this._bookInterest$.asObservable();

  _researchedBooks$: BehaviorSubject<any> = new BehaviorSubject([]);
  researchedBooks$: Observable<any> = this._researchedBooks$.asObservable();

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

        this._bookInterest$.next(false);

        newState.map((book) => {
          if (book.interests > 0) {
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

    this._firestore
      .collection("interest", (ref) => ref.where("bookId", "==", id))
      .valueChanges({ idField: "id" })
      .pipe(
        tap((interests) => {
          interests.map((item) =>
            this._firestore
              .collection("interest")
              .doc(item.id)
              .delete()
              .then((response) => console.log("Interet deleted!!"))
              .catch((error) => console.log("error: ", error))
          );
        })
      )
      .subscribe((res) => res);
  }

  async getUserResearchedBooks() {
    const userID = await this._angularAuth.currentUser.then(
      (response) => response.uid
    );
    this._firestore
      .collection<IBook>("books", (ref) =>
        ref.where("userId", "==", userID).where("researched", "==", true)
      )
      .stateChanges(["added", "removed", "modified"])
      .pipe(
        map((books) =>
          books.map((book) => {
            const data = book.payload.doc.data();
            const type = book.type;
            const id = book.payload.doc.id;

            return { id, ...data, type };
          })
        )
      )
      .subscribe((newData: any) => {
        const currentState = this._researchedBooks$.value.filter(
          (book) => !newData.find((bk) => bk.id === book.id)
        );

        const newState = [
          ...currentState,
          ...newData.filter((book) => book.type !== "removed")
        ].map((data) => {
          delete data.type;

          return data;
        });

        this._researchedBooks$.next(newState);

        return newState;
      });
  }
}
