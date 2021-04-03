import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopoverComponent } from "./components/popover/popover.component";
import { COMPONENTS } from "./components";
import { IonicModule } from "@ionic/angular";
import { ScrollListComponent } from './components/scroll-list/scroll-list.component';

@NgModule({
  declarations: [PopoverComponent, ...COMPONENTS, ScrollListComponent],
  imports: [CommonModule, IonicModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
