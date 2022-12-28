import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContattiService } from 'src/app/services/contatti.service';

@Component({
  selector: 'app-route-parent',
  templateUrl: './route-parent.component.html',
  styleUrls: ['./route-parent.component.scss']
})
export class RouteParentComponent implements OnInit {

  persone: any;
  persona: any;
  
  constructor(private personeServizio: ContattiService, private router: Router) { }

  ngOnInit(): void {
    this.persone = this.personeServizio.getPersone();
  }
  goToProfile(id: any){
    this.router.navigate(["/route-parent/", id]);
  }
}
