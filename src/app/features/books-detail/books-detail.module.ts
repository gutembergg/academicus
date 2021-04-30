import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksDetailRoutingModule } from "./books-detail-routing.module";
import { BooksDetailComponent } from "./books-detail.component";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [BooksDetailComponent],
  imports: [
    CommonModule,
    BooksDetailRoutingModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BooksDetailModule {}
