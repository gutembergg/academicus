import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomeModule)
      },
      {
        path: "book-list",
        loadChildren: () =>
          import("../books-list/books-list.module").then(
            (m) => m.BooksListModule
          )
      },
      {
        path: "book-detail",
        loadChildren: () =>
          import("../books-detail/books-detail.module").then(
            (m) => m.BooksDetailModule
          )
      },
      {
        path: "user-profile",
        loadChildren: () =>
          import("../user-profile/user-profile.module").then(
            (m) => m.UserProfileModule
          )
      },
      {
        path: "login",
        loadChildren: () =>
          import("../authentication/authentication.module").then(
            (m) => m.AuthenticationModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
