import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { IBook } from "src/app/interfaces/IBook";

@Injectable({
  providedIn: "root"
})
export class BookFindedService {
  subjectData$: BehaviorSubject<any> = new BehaviorSubject(null);
  bookFinded$: Observable<IBook> = this.subjectData$.asObservable();

  constructor(private _firstore: AngularFirestore) {}

  set(book: IBook) {
    return this.subjectData$.next(book);
  }

  get() {
    return this.bookFinded$;
  }

  sendOffer() {
    console.log("ok");
  }
}
