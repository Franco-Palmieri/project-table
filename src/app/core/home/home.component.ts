import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('formInput') formInput!: ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit(): void {
  }
  colorCustom = '';

  title = 'titolo';

  changeColorRadio(color: string){
    this.colorCustom = color;
  };

  changeColorForm(){
    this.colorCustom = this.formInput.nativeElement.value;
  }
}
