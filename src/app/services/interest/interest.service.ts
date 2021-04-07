import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { IInterest } from "src/app/interfaces/IInterest";

@Injectable({
  providedIn: "root"
})
export class InterestService {
  constructor(private _firestore: AngularFirestore) {}

  createInterest(values: IInterest) {
    this._firestore
      .collection("interest")
      .add(values)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}
