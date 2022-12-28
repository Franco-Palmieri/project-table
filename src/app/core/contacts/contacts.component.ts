import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContattiService } from 'src/app/services/contatti.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contattiService: ContattiService, private route: ActivatedRoute, private router: Router) { }

  contacts: any;
  contact: any
  isProfile: boolean = false;

  ngOnInit(): void {
    this.contacts = this.contattiService.getPersone();
    this.checkProfile();
  }

  checkProfile(){
    if(this.route.snapshot.paramMap.get('id')){
      this.isProfile = true
      this.contact = this.contattiService.getPersona(this.route.snapshot.paramMap.get('id'));
    }else{
      this.isProfile = false;
    }
  }

  goToProfile(id: any){
    this.router.navigate(["/contacts/", id]);
  }

}
