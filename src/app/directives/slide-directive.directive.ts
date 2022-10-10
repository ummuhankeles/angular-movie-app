import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlideDirective]'
})
export class SlideDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mousedown')
  prevFunction() {
    let element = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = element.querySelectorAll(".slider-wrap-main-item");
    element.prepend(item[item.length-1]);
  }
}
