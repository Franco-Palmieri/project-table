import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  isHidden: boolean = false;
  persone = [
    {
      name: 'Luca',
      surname: 'Rossi',
      age: 24,
      isOnline: true,
    },
    {
      name: 'Marco',
      surname: 'Verdi',
      age: 40,
      isOnline: false
    },
    {
      name: 'Pippo',
      surname: 'Baudo',
      age: 14,
      isOnline: true
    }
  ];
  
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.isHidden ? this.isHidden = false : this.isHidden = true;
    }, 1000)
  }

}
