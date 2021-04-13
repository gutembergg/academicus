import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userIdSubJect$: BehaviorSubject<any> = new BehaviorSubject(null);
  userId$: Observable<any> = this.userIdSubJect$.asObservable();

  userId: string;

  constructor(
    private _firestor: AngularFirestore,
    private _authFirebase: AngularFireAuth,
    private _router: Router
  ) {}

  createUser(_email: string, _password: string) {
    this._authFirebase
      .createUserWithEmailAndPassword(_email, _password)
      .then((userCredential) => {
        const { email, uid } = userCredential.user;

        this._firestor
          .collection("users")
          .doc(uid)
          .set({
            email
          })
          .then(() => {
            console.log("Document successfully written!");
            this._router.navigate(["/pages/home"]);
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  signIn(email: string, password: string) {
    this._authFirebase
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this._router.navigate(["/pages/home"]);
      });
  }

  signOut() {
    this._authFirebase
      .signOut()
      .then(() => {
        console.log("deconnecté");
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
