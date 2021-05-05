import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { COMPONENTS } from "./components";
import { IonicModule } from "@ionic/angular";
import { ActivedButtonDirective } from "./components/categories/diretives/actived-button.directive";
import { ResearchedBookComponent } from './components/researched-book/researched-book.component';
import { UserBookResearchedComponent } from './components/user-book-researched/user-book-researched.component';

@NgModule({
  declarations: [...COMPONENTS, ActivedButtonDirective, ResearchedBookComponent, UserBookResearchedComponent],
  imports: [CommonModule, IonicModule],
  exports: [...COMPONENTS, ActivedButtonDirective]
})
export class SharedModule {}
