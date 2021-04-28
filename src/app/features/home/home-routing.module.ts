import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorFindedComponent } from "./author-finded/author-finded.component";
import { BookFindedComponent } from "./book-finded/book-finded.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "book-finded/:id", component: BookFindedComponent },
  { path: "author-finded", component: AuthorFindedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
