import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { IInterest } from "src/app/interfaces/IInterest";

@Injectable({
  providedIn: "root"
})
export class InterestService {
  _interest$: BehaviorSubject<any> = new BehaviorSubject([]);
  interest$: Observable<any> = this._interest$.asObservable();

  interestsCount: number;

  constructor(private _firestore: AngularFirestore) {}

  createInterest(values: IInterest) {
    const { bookId } = values;

    this._firestore
      .collection("interest")
      .add(values)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

        this._firestore
          .collection<IBook>("books")
          .doc(bookId)
          .valueChanges({ idField: "id" })
          .pipe(tap((book) => console.log("====>", book.interests)))
          .subscribe((res) => res);

        this.getInterestsCount(bookId)
          .pipe(tap((res) => console.log("----", res)))
          .subscribe((res) => res);

        this._firestore.collection("books").doc(bookId).update({
          interests: 1
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  getInterestsCount(bookId: string) {
    return this._firestore
      .collection<IBook>("books")
      .doc(bookId)
      .valueChanges({ idField: "id" })
      .pipe(tap((res) => console.log("resTap", res)));
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
            const type = res.type;

            return { id, ...data, type };
          })
        )
      )
      .subscribe((newData) => {
        const currentState = this._interest$.value.filter(
          (intert) => !newData.find((nwD) => nwD.id === intert.id)
        );

        const newState = [
          ...currentState,
          ...newData.filter((data) => data.type !== "removed")
        ].map((interest) => {
          delete interest.type;

          return interest;
        });

        this._interest$.next(newState);
      });
  }

  deleteInteret(interetId: string) {
    this._firestore
      .collection("interest")
      .doc(interetId)
      .delete()
      .then((response) => console.log("Interest deleted"))
      .catch((error) => console.log("Error: ", error));
  }
}
