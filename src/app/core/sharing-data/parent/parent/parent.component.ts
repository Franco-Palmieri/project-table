import { Component, OnInit} from '@angular/core';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  newCountry: any;
  countries: any;

  constructor(private service: ServizioService) { }

  ngOnInit(): void {
    this.countries = this.service.getCountries();
  }

  changeNames() {
    /**
     * Reference:
      Value
      let x = 0;
      let y = x;
      y++;

      console.log('x', x); => 0
      console.log('y', y); => 1

      Reference

      let z = [0, 1, 2, 3] //OxxOx => memoria di z
      let w = z; => assegno a w lo stesso spazio di memoria di z;
      w.push(4); => modifico entrambe

      console.log('z', z)
      console.log('w', w)

      w = [...z]; => w utilizza grazie allo spred operator un nuovo spazio di memoria copiando le proprietà di z
      w.push(5);

      console.log('z', z) => z rimane invariato
      console.log('w', w) => w viene modificato
     */
    this.countries = [...this.countries, {name: 'pippo', people: 23, continent: 'Europe'}]
  }

  /**
   * Funzione che riceve in ingresso dal child l'evento
   * @param newData 
   */
  newData(newData: any){
    this.countries = [...this.countries, newData]

    console.log(this.countries, 'countries')
  }
}
