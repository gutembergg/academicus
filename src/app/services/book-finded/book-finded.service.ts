import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { IBook } from "src/app/interfaces/IBook";

@Injectable({
  providedIn: "root"
})
export class BookFindedService {
  _bookFinded$: BehaviorSubject<any> = new BehaviorSubject(null);
  bookFinded$: Observable<IBook> = this._bookFinded$.asObservable();

  constructor(private _firestore: AngularFirestore) {}

  getUserBookById(bookId: string) {
    this._firestore
      .doc(`books/${bookId}`)
      .valueChanges({ idField: "id" })
      .subscribe((res) => this._bookFinded$.next(res));
  }

  set(book: IBook) {
    return this._bookFinded$.next(book);
  }

  get() {
    return this.bookFinded$;
  }

  sendOffer() {
    console.log("ok");
  }
}
