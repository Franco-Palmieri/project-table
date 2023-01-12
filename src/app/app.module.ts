import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainModule } from './core/main/main/main.module';
import { DirectivesModule } from './core/directives/directives/directives.module';
import { SharingModule } from './core/sharing-data/sharing/sharing.module';
import { VarTemplateModule } from './core/var-template/var-template/var-template.module';
import { DirettivaDirective } from './direttive/direttiva.directive';
import { PipeFunctionsModule } from './core/pipe-functions/pipe-functions/pipe-functions.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { NavDirettivaDirective } from './direttive/nav-direttiva.directive';
import { ContactsModule } from './core/contacts/contacts/contacts.module';
import { RouteParentModule } from './core/route-children/route-parent/route-parent/route-parent.module';
import { ObservableModule } from './core/observable/observable/observable/observable.module';
import { TemplateDrivenModule } from './core/template-driven/template-driven/template-driven.module';
import { ReactiveFormModule } from './core/reactive-form/reactive-form/reactive-form.module';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {SwitchLangModule} from "./core/switch-lang/switch-lang/switch-lang.module";



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
    ContactsModule,
    RouteParentModule,
    ObservableModule,
    TemplateDrivenModule,
    ReactiveFormsModule,
    ReactiveFormModule,
    HttpClientModule,
    SwitchLangModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
