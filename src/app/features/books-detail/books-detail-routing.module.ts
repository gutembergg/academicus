import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksDetailComponent } from "./books-detail.component";

const routes: Routes = [
  {
    path: ":bk",
    component: BooksDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksDetailRoutingModule {}
