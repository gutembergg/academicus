import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BooksService } from "src/app/services/books/books.service";

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

  researchedBook$: any;

  constructor(private _bookService: BooksService, private _router: Router) {}

  ngOnInit(): void {
    this.researchedBook$ = this._bookService.researchedBooks$;
  }

  selecteBook(bookId: string) {
    this._router.navigate(["/pages/home/book-finded", bookId]);
  }
}
