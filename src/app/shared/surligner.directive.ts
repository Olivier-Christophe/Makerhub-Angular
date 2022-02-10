import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSurligner]'
})
export class SurlignerDirective {
  

  constructor( private element: ElementRef

  ) { }

  @HostListener('mouseenter') mouseIn(){
    this.surligner('lightgreen')
  }
  @HostListener('mouseleave') mouseOut(){
    this.surligner('')
  }

  surligner(color:string)
 {this.element.nativeElement.style.backgroundColor=color}

//backgroundColor

}
