import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunction() {
    let element = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = element.querySelector(".slider-wrap-main-item");
    element.append(item);
  }

}
