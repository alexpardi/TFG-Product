import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { AddProducte } from "src/app/model/AddProducte"
import { AddUser } from "src/app/model/AddUser"
import { modiUser } from "../model/modiUser";
import {Inicisessio} from "../model/Inicisessio";
import {Router, RouterLink} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProducteService {
  urlP = 'http://localhost:4000/api/productes/';
  urlCU = 'http://localhost:4000/api/user/creaUsuari';
  urlU = 'http://localhost:4000/api/user/eliminaUser';
  urlUI = 'http://localhost:4000/api/user/iniciaSessio';
  urlMU = 'http://localhost:4000/api/user/modificaUsuari';
  urlEU = 'http://localhost:4000/api/user/getUsuari';
  urlGC = 'http://localhost:4000/api/user/getComanda';
  urlRC = 'http://localhost:4000/api/user/realitzaComanda';
  urlNRC = 'http://localhost:4000/api/user/norealitzaComanda';

  constructor(private http: HttpClient) { }

  getProductes(): Observable<any>{
    return this.http.get(this.urlP);
  }

  eliminarProducte(id: string): Observable<any>{
    return this.http.delete(this.urlP + id);
  }

  crearProducte(producte: AddProducte): Observable<any>{
    return this.http.post(this.urlP, producte);
  }

  editarProducte(id: string): Observable<any>{
    return this.http.get(this.urlP + id);
  }

  modificarProducte(id: string, producte: AddProducte): Observable<any>{
    return this.http.put(this.urlP + id, producte);
  }

  crearUsuari(user: AddUser): Observable<any>{
    return this.http.post(this.urlCU, user);
  }

  modificaUsuari(user: modiUser): Observable<any>{
    return this.http.put(this.urlMU, user);
  }

  editarUsuari(id: string): Observable<any>{
    return this.http.get(this.urlEU + id);
  }

  inicisessio(user: Inicisessio): Observable<any>{
    return this.http.post(this.urlUI, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut(){
    if(confirm('Estas segur que vols tancar la sessió?')) {
      localStorage.removeItem('token');
    }
  }
  eliminarUsuari(user: Inicisessio): Observable<any>{
    return this.http.put(this.urlU, user);
  }
  getComanda(): Observable<any>{
    return this.http.get(this.urlGC);
  }
  realitzaComanda(id: string): Observable<any>{
    return this.http.get(this.urlRC + id);
  }
  norealitzaComanda(id: string): Observable<any>{
    return this.http.get(this.urlNRC + id);
  }

}
