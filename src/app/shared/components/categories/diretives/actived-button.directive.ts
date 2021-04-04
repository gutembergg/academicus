import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appActivedButton]"
})
export class ActivedButtonDirective {
  constructor(private _el: ElementRef) {}

  @HostListener("click") onMouseEnter() {
    this.changeColor("red");
  }

  private changeColor(color: string): void {
    this._el.nativeElement.style.backgroundColor = color;
  }
}
