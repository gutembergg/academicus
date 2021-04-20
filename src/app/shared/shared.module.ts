import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { COMPONENTS } from "./components";
import { IonicModule } from "@ionic/angular";
import { ActivedButtonDirective } from "./components/categories/diretives/actived-button.directive";

@NgModule({
  declarations: [...COMPONENTS, ActivedButtonDirective],
  imports: [CommonModule, IonicModule],
  exports: [...COMPONENTS, ActivedButtonDirective]
})
export class SharedModule {}
