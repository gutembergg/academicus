import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"]
})
export class PagesComponent implements OnInit {
  user: boolean;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });

    promise.then((value: boolean) => {
      if (value) {
        this._router.navigate(["/pages/home"]);
        this.user = value;
      } else {
        this._router.navigate(["/pages/home"]);
        this.user = value;
      }
    });
  }
}
