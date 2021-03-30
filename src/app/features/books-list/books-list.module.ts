import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksListRoutingModule } from "./books-list-routing.module";
import { BooksListComponent } from "./books-list.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [BooksListComponent],
  imports: [CommonModule, BooksListRoutingModule, IonicModule]
})
export class BooksListModule {}
