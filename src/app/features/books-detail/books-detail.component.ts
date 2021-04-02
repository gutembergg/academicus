import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

const categoryList = [
  "droit",
  "medicine",
  "histoire",
  "economie",
  "astronomie"
];

@Component({
  selector: "app-books-detail",
  templateUrl: "./books-detail.component.html",
  styleUrls: ["./books-detail.component.scss"]
})
export class BooksDetailComponent implements OnInit {
  theBook: any;
  form: string[] = categoryList;
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((book) => (this.theBook = book));
    console.log("this.theBook", this.theBook);
  }
}
