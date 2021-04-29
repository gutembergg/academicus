import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";

@Injectable({
  providedIn: "root"
})
export class AuthorsFindedService {
  colections: AngularFirestoreCollection<any>;

  authorSujectData$: BehaviorSubject<any> = new BehaviorSubject(null);
  booksByAuthor$: Observable<any> = this.authorSujectData$.asObservable();

  constructor(private _firestore: AngularFirestore) {}

  getBooksByAuthor(author: string) {
    this.colections = this._firestore.collection("books", (ref) =>
      ref.where("authors", "==", `${author}`)
    );
    this.colections
      .valueChanges({ idField: "id" })
      .subscribe((response: any) => this.authorSujectData$.next(response));
  }

  get() {
    return this.booksByAuthor$;
  }
}
