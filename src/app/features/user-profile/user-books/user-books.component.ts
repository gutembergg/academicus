import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-books",
  templateUrl: "./user-books.component.html",
  styleUrls: ["./user-books.component.scss"]
})
export class UserBooksComponent implements OnInit {
  slideOpts = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
