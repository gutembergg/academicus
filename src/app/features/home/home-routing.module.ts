import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookFindedComponent } from "./book-finded/book-finded.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "book-finded", component: BookFindedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
