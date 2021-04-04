import { Component, OnInit } from "@angular/core";
import { IList } from "src/app/interfaces/IList";
import { ApiBooksService } from "src/app/services/api-books.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  listBooks: IList[] = [];

  constructor(private _apiService: ApiBooksService) {}

  ngOnInit(): void {}

  searchBooks($event: any) {
    const value = $event.target.value;

    if (value.length === 0) {
      this.listBooks = [];
      return;
    }
    const list = this._apiService.listDB();
    const items = list.filter((item) =>
      item.title.toLocaleLowerCase().includes(value)
    );

    this.listBooks = items;
  }

  segmentChanged($event: any) {
    console.log("event", $event);
  }

  selectedBook(item: any) {
    console.log(item);
  }
}
