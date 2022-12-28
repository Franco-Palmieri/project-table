import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirettiva]'
})
export class DirettivaDirective {

  @Input() appDirettiva = '';
  @Input() defaultColor = '';

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.changeColor(this.appDirettiva || this.defaultColor || 'black');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeColor('red');
  }; 

  changeColor(color: string){
    this.element.nativeElement.style.backgroundColor = color;
  }
}
