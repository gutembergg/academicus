import { Component, OnInit } from "@angular/core";

const categoriesList = [
  { id: "1", name: "Droit" },
  { id: "2", name: "Médicine" },
  { id: "3", name: "Histoire" },
  { id: "4", name: "Físique" },
  { id: "5", name: "Chímie" },
  { id: "6", name: "Astronomie" },
  { id: "7", name: "Art" },
  { id: "8", name: "Geographie" },
  { id: "9", name: "Économie" },
  { id: "10", name: "Pédagogie" },
  { id: "11", name: "Architecture" }
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
}
