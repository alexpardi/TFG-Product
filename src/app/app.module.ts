import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CrearProducteComponent } from './Components/crear-producte/crear-producte.component';
import { LlistaProductesComponent } from './Components/llista-productes/llista-productes.component';
import { ModificaUsuariComponent } from './Components/modifica-usuari/modifica-usuari.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { IniciarUsuariComponent } from './Components/iniciar-usuari/iniciar-usuari.component'
import {AuthGuard} from "./auth.guard";
import { TokenInterceptorService } from "./servei/token-interceptor.service";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AfegirUsuariComponent } from './Components/afegir-usuari/afegir-usuari.component';
import { ComandesComponent } from './Components/comandes/comandes.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProducteComponent,
    LlistaProductesComponent,
    ModificaUsuariComponent,
    IniciarUsuariComponent,
    AfegirUsuariComponent,
    ComandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
