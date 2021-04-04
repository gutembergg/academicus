import { Component, Input, OnInit } from "@angular/core";

const fakeList = [
  "http://books.google.com/books/content?id=4pOQAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
];

@Component({
  selector: "app-scroll-list",
  templateUrl: "./scroll-list.component.html",
  styleUrls: ["./scroll-list.component.scss"]
})
export class ScrollListComponent implements OnInit {
  @Input() defaultCategory: string;

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
