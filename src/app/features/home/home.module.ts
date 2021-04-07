import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/shared/shared.module";
import { BookFindedComponent } from './book-finded/book-finded.component';

@NgModule({
  declarations: [HomeComponent, BookFindedComponent],
  imports: [CommonModule, HomeRoutingModule, IonicModule, SharedModule]
})
export class HomeModule {}
