import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlideDirective]'
})
export class SlideDirectiveDirective {

  stopper = true;

  constructor(private el: ElementRef) { }

  @HostListener('drag')
  prevFunction() {
    if (this.stopper) {
      this.stopper = false;
      let element = this.el.nativeElement.parentElement.parentElement.children[0];
      let item = element.querySelectorAll(".slider-wrap-main-item");
      element.prepend(item[item.length-1]);
      setTimeout(() => {
        this.stopper = true;
      }, 250)
    }
    
  }
}
