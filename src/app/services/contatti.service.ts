import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  persone = [
    {
      id: 1,
      name: 'Francesco',
      surname: 'Palmieri'
    },
    {
      id: 2,
      name: 'Giacomo',
      surname: 'Verdi'
    },
    {
      id: 3,
      name: 'Valerio',
      surname: 'Rossi'
    },
    {
      id: 4,
      name: 'Pino',
      surname: 'Rauti'
    },
    {
      id: 5,
      name: 'Enrico',
      surname: 'Berlinguer'
    },
  ];
  persona: any;

  constructor() { }

  getPersone(){
    return this.persone;
  }

  getPersona(id: any){
    this.persona = this.persone.filter(el => el.id == id);
    return this.persona[0];
  }
}
