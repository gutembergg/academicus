import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { IBook } from "src/app/interfaces/IBook";
import { BooksService } from "src/app/services/books/books.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  listItems: any[] = [];
  dbBooks: IBook[] = [];
  subscription: Subscription;
  authorsList: string[] = [];
  seachFomat = "titre";

  constructor(private _firestore: BooksService) {}

  ngOnInit(): void {
    this.subscription = this._firestore.books$.subscribe((response: any) => {
      this.dbBooks = response;

      response.map((item) => this.authorsList.push(item.authors));
    });
  }

  searchBooks($event: any) {
    const value = $event.target.value;

    if (value.length === 0) {
      this.listItems = [];
      return;
    }

    if (this.seachFomat === "titre") {
      const list = this.dbBooks;
      const items = list.filter((item) =>
        item.title.toLocaleLowerCase().includes(value)
      );

      this.listItems = items;
    } else {
      const list = this.authorsList;
      const items = list.filter((item) =>
        item.toLocaleLowerCase().includes(value)
      );

      this.listItems = items;
    }
  }

  segmentChanged($event: any) {
    this.seachFomat = $event.target.value;
    console.log("event", $event.target.value);
  }

  selectedBook(item: any) {
    console.log(item);
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
    this.subscription.unsubscribe();
  }
}
