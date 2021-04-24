import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserProfileRoutingModule } from "./user-profile-routing.module";
import { UserProfileComponent } from "./user-profile.component";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/shared/shared.module";
import { UserBooksComponent } from './user-books/user-books.component';

@NgModule({
  declarations: [UserProfileComponent, UserBooksComponent],
  imports: [CommonModule, UserProfileRoutingModule, IonicModule, SharedModule]
})
export class UserProfileModule {}
