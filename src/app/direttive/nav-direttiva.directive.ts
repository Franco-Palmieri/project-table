import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNavDirettiva]'
})
export class NavDirettivaDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.changeBackground('gray')
  };
  
  @HostListener('mouseleave') onMouseLeave(){
    this.changeBackground('acqua')
  };

  changeBackground(color: string){
    this.element.nativeElement.backgroundColor = color
  }
}
