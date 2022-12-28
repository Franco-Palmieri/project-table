import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-children',
  templateUrl: './contact-children.component.html',
  styleUrls: ['./contact-children.component.scss']
})
export class ContactChildrenComponent implements OnInit {

  @Input() contactChildren: any;
  
  constructor() { }
  ngOnInit(): void {
  }

}
