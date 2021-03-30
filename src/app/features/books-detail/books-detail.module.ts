import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksDetailRoutingModule } from "./books-detail-routing.module";
import { BooksDetailComponent } from "./books-detail.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [BooksDetailComponent],
  imports: [CommonModule, BooksDetailRoutingModule, IonicModule]
})
export class BooksDetailModule {}
