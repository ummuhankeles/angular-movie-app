import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  prevFunction() {
    let element = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = element.querySelectorAll(".slider-wrap-main-item");
    console.log(element.prepend(item[item.length-1]));
  }

}
