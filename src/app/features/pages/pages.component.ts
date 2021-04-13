import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"]
})
export class PagesComponent implements OnInit {
  user: boolean;

  constructor(private _authService: AngularFireAuth) {}

  ngOnInit(): void {
    this._authService.onAuthStateChanged((user) =>
      user ? (this.user = true) : (this.user = false)
    );
  }
}
