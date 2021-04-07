import { Component, Input, OnInit } from "@angular/core";

import { ICategory } from "src/app/interfaces/ICategory";

@Component({
  selector: "app-scroll-list",
  templateUrl: "./scroll-list.component.html",
  styleUrls: ["./scroll-list.component.scss"]
})
export class ScrollListComponent implements OnInit {
  @Input() defaultCategory: ICategory;
  @Input() selectCategory: ICategory;

  bookCategory: any;

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
