import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CrearProducteComponent } from './Components/crear-producte/crear-producte.component';
import { LlistaProductesComponent } from './Components/llista-productes/llista-productes.component';
import { ModificaUsuariComponent } from './Components/modifica-usuari/modifica-usuari.component';

import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { IniciarUsuariComponent } from './Components/iniciar-usuari/iniciar-usuari.component'
import {AuthGuard} from "./auth.guard";
import { TokenInterceptorService } from "./servei/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    CrearProducteComponent,
    LlistaProductesComponent,
    ModificaUsuariComponent,
    IniciarUsuariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
