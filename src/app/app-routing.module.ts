import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { DirectivesComponent } from './core/directives/directives.component';
import { HomeComponent } from './core/home/home.component';
import { MainComponent } from './core/main/main.component';
import { PipeFunctionsComponent } from './core/pipe-functions/pipe-functions.component';
import { SharingComponent } from './core/sharing-data/sharing/sharing/sharing.component';
import { VarTemplateComponent } from './core/var-template/var-template.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'main', component: MainComponent},
  {path: 'pipe-functions', component: PipeFunctionsComponent},
  {path: 'sharing', component: SharingComponent},
  {path: 'var-template', component: VarTemplateComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/:id', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
