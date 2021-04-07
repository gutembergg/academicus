import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/shared/shared.module";
import { BookFindedComponent } from "./book-finded/book-finded.component";
import { AuthorFindedComponent } from "./author-finded/author-finded.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, BookFindedComponent, AuthorFindedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule {}
