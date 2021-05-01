import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-researched-book",
  templateUrl: "./researched-book.component.html",
  styleUrls: ["./researched-book.component.scss"]
})
export class ResearchedBookComponent implements OnInit {
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
