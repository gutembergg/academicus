import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./features/pages/pages.module").then((m) => m.PagesModule)
  },
  {
    path: "",
    redirectTo: "pages",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
