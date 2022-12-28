import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() countriesChild: any;
  // onSendingData => funzione che invia il dato
  @Output() onSendingData: EventEmitter<any> = new EventEmitter<any>(); 
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.countriesChild)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'CHANGES')
  }

  sendCountry(){
    const newCountry = {name: 'China', people: 23, continent: 'Asia'}
    this.onSendingData.emit(newCountry);
  }
  

}
