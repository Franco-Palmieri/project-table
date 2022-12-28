import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  countries = [
    {
      name: 'Italia',
      people: 20,
      continent: 'Europe'
    },
    {
      name: 'Chile',
      people: 15,
      continent: 'South America'
    },
    {
      name: 'Francia',
      people: 28,
      continent: 'Europe'
    },
    {
      name: 'Ghana',
      people: 10,
      continent: 'Africa'
    },
    {
      name: 'Argentina',
      people: 30,
      continent: 'South America'
    },
    {
      name: 'United States',
      people: 50,
      continent: 'North America'
    },
    {
      name: 'Canada',
      people: 40,
      continent: 'North America'
    }
  ];
  
  constructor() { }

  getCountries(){
    return this.countries;
  }
}
