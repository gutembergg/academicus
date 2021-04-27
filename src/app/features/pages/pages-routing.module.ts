import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import {
  AngularFireAuthGuard,
  canActivate,
  redirectUnauthorizedTo
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(["pages/login"]);

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
        ...canActivate(redirectUnauthorizedToLogin),
        loadChildren: () =>
          import("../books-detail/books-detail.module").then(
            (m) => m.BooksDetailModule
          )
      },
      {
        path: "user-profile",
        ...canActivate(redirectUnauthorizedToLogin),
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
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
