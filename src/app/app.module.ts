import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from './core/main/main/main.module';
import { DirectivesModule } from './core/directives/directives/directives.module';
import { SharingModule } from './core/sharing-data/sharing/sharing.module';
import { VarTemplateModule } from './core/var-template/var-template/var-template.module';
import { DirettivaDirective } from './direttive/direttiva.directive';
import { PipeFunctionsComponent } from './core/pipe-functions/pipe-functions.component';
import { PipeFunctionsModule } from './core/pipe-functions/pipe-functions/pipe-functions.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { NavDirettivaDirective } from './direttive/nav-direttiva.directive';
import { ContactsComponent } from './core/contacts/contacts.component';
import { ContactsModule } from './core/contacts/contacts/contacts.module';



@NgModule({
  declarations: [
    AppComponent,
    DirettivaDirective,
    NavbarComponent,
    HomeComponent,
    NavDirettivaDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    DirectivesModule,
    SharingModule,
    FormsModule,
    VarTemplateModule,
    PipeFunctionsModule,
    ContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
