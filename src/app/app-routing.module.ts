import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactChildrenComponent } from './core/contact-children/contact-children.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { DirectivesComponent } from './core/directives/directives.component';
import { HomeComponent } from './core/home/home.component';
import { MainComponent } from './core/main/main.component';
import { ObservableComponent } from './core/observable/observable/observable.component';
import { PipeFunctionsComponent } from './core/pipe-functions/pipe-functions.component';
import { RouteChildrenComponent } from './core/route-children/route-children/route-children.component';
import { RouteParentComponent } from './core/route-children/route-parent/route-parent.component';
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
  /**
  * Rotta con Params
  */
 {path: 'contacts/:id', component: ContactsComponent},
  /**
  * Rotta con Children
  */
  // {path: 'route-parent', component: RouteParentComponent, children: [
  //  {path: ':id', component: RouteChildrenComponent}
  // ]}
  /**
  * Rotta con Routing Guard
  * (Il componente si attiva solo se AuthGuard ci restituisce True)
  */
  {path: 'route-parent', component: RouteParentComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
    {path: ':id', component: RouteChildrenComponent}
  ]},
  {path: 'observables', component: ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
