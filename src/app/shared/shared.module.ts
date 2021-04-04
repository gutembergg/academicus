import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopoverComponent } from "./components/popover/popover.component";
import { COMPONENTS } from "./components";
import { IonicModule } from "@ionic/angular";
import { ScrollListComponent } from "./components/scroll-list/scroll-list.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { ActivedButtonDirective } from "./components/categories/diretives/actived-button.directive";

@NgModule({
  declarations: [
    PopoverComponent,
    ...COMPONENTS,
    ScrollListComponent,
    CategoriesComponent,
    ActivedButtonDirective
  ],
  imports: [CommonModule, IonicModule],
  exports: [...COMPONENTS, ActivedButtonDirective]
})
export class SharedModule {}
