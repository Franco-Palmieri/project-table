import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-var-template',
  templateUrl: './var-template.component.html',
  styleUrls: ['./var-template.component.scss']
})
export class VarTemplateComponent implements OnInit, AfterViewInit {
  /**
   * ViewChild
   * Attraverso il decoratore ViewChild è possibile avere accesso alle proprietà (es: value)
   *  di una form / input / component
   */
  @ViewChild('inputSaluti') prova!: ElementRef<HTMLInputElement>;
  provaValue = '';
  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    console.log(this.prova.nativeElement.value);
    this.provaValue = this.prova.nativeElement.value;
  }
  
  onClickSaluti(){
    console.log(this.prova.nativeElement.value);
    this.provaValue = this.prova.nativeElement.value;
  }

}
