import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IInterest } from "src/app/interfaces/IInterest";

@Injectable({
  providedIn: "root"
})
export class InterestService {
  _interest$: BehaviorSubject<any> = new BehaviorSubject([]);
  interest$: Observable<any> = this._interest$.asObservable();

  constructor(private _firestore: AngularFirestore) {}

  createInterest(values: IInterest) {
    const { bookId } = values;

    this._firestore
      .collection("interest")
      .add(values)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

        this._firestore
          .collection("books")
          .doc(bookId)
          .update({
            interests: +1
          });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  getListInterstsByBookId(bookId: string) {
    this._firestore
      .collection<IInterest>("interest", (ref) =>
        ref.where("bookId", "==", bookId)
      )
      .stateChanges(["added", "removed"])
      .pipe(
        map((response) =>
          response.map((res) => {
            const data = res.payload.doc.data();
            const id = res.payload.doc.id;

            console.log("payload: ", data);
            return { id, ...data };
          })
        )
      )
      .subscribe((newData) => {
        this._interest$.next(newData);
      });
  }
}
