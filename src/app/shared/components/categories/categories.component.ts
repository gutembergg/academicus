import { Component, OnInit } from "@angular/core";

const categoriesList = [
  { id: "1", name: "Droit", icon: "briefcase-outline" },
  { id: "2", name: "Médicine", icon: "medkit-outline" },
  { id: "3", name: "Histoire", icon: "book-outline" },
  { id: "4", name: "Físique", icon: "planet-outline" },
  { id: "5", name: "Chímie", icon: "flask-outline" },
  { id: "6", name: "Astronomie", icon: "telescope-outline" },
  { id: "7", name: "Art", icon: "color-palette-outline" },
  { id: "8", name: "Geographie", icon: "earth-outline" },
  { id: "9", name: "Économie", icon: "cash-outline" },
  { id: "10", name: "Pédagogie", icon: "flask-outline" },
  { id: "11", name: "Architecture", icon: "business-outline" }
];

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  listCategory: any[] = categoriesList;

  constructor() {}

  ngOnInit(): void {}

  selectCategory($event, i) {
    console.log(categoriesList[i]);
  }

  segmentChanged($event) {
    console.log($event);
  }
}
