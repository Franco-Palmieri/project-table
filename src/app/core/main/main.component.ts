import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  longText = "Sed ut pe beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed .";

  /**
   * String Interpolation
   */
  flagCard = false;
  dogs = [
    {
      name: 'Lillo',
      race: 'Terrier',
      description: this.longText
    },
  ];

  /**
   * Property Interopation
   */
  isDisabled = false;
  dog1 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*';
  dog2 = 'https://i.guim.co.uk/img/media/b3f9db5d504c00304c37724927b6e407da17c36b/0_197_5850_3511/master/5850.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=87966753ed0906994f60f72735295414';
  dogImage = '';

  /**
   * Event Binding
   */
  onWrite(event: Event){
    console.log(
      (<HTMLInputElement>event.target).value
    );
    let targetValue = (<HTMLInputElement>event.target).value
    !!targetValue && this.dogs[0].name.includes(targetValue) ? this.flagCard = true : this.flagCard = false;
  }

  /**
   * Two way Binding
   */ 
  title = '';

  changeTitle(event: Event){
    this.title = (<HTMLInputElement>event.target).value;
  }
  onClick(){
    this.title = 'ho cliccato il bottone';
  }
  constructor() { }

  ngOnInit(): void {
    let counter = 0;
    setInterval(() => {
      if(counter % 2 == 0){
        this.dogImage = this.dog1;
      }else {
        this.dogImage = this.dog2;
      }
      counter++;
    }, 1000)
  }

}
