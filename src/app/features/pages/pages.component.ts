import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"]
})
export class PagesComponent implements OnInit {
  user: boolean;

  constructor(private _authService: AngularFireAuth, private _router: Router) {}

  ngOnInit(): void {
    this._authService.onAuthStateChanged((user) =>
      user ? (this.user = true) : (this.user = false)
    );

    this.goToHome();
  }

  goToHome() {
    this._router.navigate(["/pages/home"]);
  }
}
