import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-books-detail",
  templateUrl: "./books-detail.component.html",
  styleUrls: ["./books-detail.component.scss"]
})
export class BooksDetailComponent implements OnInit {
  theBook: any;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    /*  this._route.params.subscribe((params) => {
      this.theBook = params["book"];
    });

    console.log(this.theBook); */
  }
}
