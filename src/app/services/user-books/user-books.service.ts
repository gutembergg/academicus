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
        ref.where("userId", "==", `${userID}`)
      )
      .stateChanges(["added", "modified", "removed"])
      .pipe(
        map((response) =>
          response.map((res) => {
            const data = res.payload.doc.data();
            const id = res.payload.doc.id;
            return { id, ...data };
          })
        )
      )
      .subscribe((newData) => {
        const currentState = this._userBooks$.value.filter(
          (book) => !newData.find((newBook) => newBook.id === book.id)
        );

        const newState = [...currentState, ...newData];

        this._userBooks$.next(newState);
      });
  }

  getUserBookById(bookId: string) {
    this._firestore
      .collection("books")
      .doc(bookId)
      /* .get()
      .subscribe((res) => console.log("res==>", res.data())); */
      .valueChanges({ idField: "_id" })
      .subscribe((res) => console.log("===>", res));
  }
}
