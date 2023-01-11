import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  anagraficaForm: FormGroup;
  constructor() {
    this.anagraficaForm = new FormGroup({
      nome: new FormControl(undefined, Validators.required),
      cognome: new FormControl(undefined, Validators.required),
      email: new FormControl(undefined, [Validators.required, Validators.email])
    })
   }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.anagraficaForm);
  }

}
