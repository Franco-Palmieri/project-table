import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContattiService } from 'src/app/services/contatti.service';
@Component({
  selector: 'app-route-children',
  templateUrl: './route-children.component.html',
  styleUrls: ['./route-children.component.scss']
})
export class RouteChildrenComponent implements OnInit {

  id: any;
  persona: any;

  constructor(private route: ActivatedRoute, private servizioPersona: ContattiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.persona = this.servizioPersona.getPersona(this.id);
    });
    
  }

}
