import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookEditRemoveComponent } from "./book-edit-remove/book-edit-remove.component";
import { UserProfileComponent } from "./user-profile.component";

const routes: Routes = [
  {
    path: "",
    component: UserProfileComponent
  },
  { path: "user-book/:id", component: BookEditRemoveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {}
