import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appActivedButton]"
})
export class ActivedButtonDirective {
  @Input() selectedIndex: string;

  selectedList: any[] = [];

  constructor(private _el: ElementRef) {}

  @HostListener("click") onMouseEnter() {
    this.changeColor();
  }

  changeColor(): void {
    /*  const element = [...this._el.nativeElement.childNodes];

    element.map((item) => console.log(item.id));
 */
    const elemntButtonClassList = [...this._el.nativeElement.classList];

    console.log(this._el.nativeElement);

    this._el.nativeElement.classList.remove("ion-color-light");

    this._el.nativeElement.classList.add("ion-color-primary");
  }
}
