import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { AddProducte } from "src/app/model/AddProducte"
import { AddUser } from "src/app/model/AddUser"
import {Inicisessio} from "../model/Inicisessio";

@Injectable({
  providedIn: 'root'
})
export class ProducteService {
  urlP = 'http://localhost:4000/api/productes/';
  urlU = 'http://localhost:4000/api/user/';
  urlUI = 'http://localhost:4000/api/user/login/';

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
    return this.http.post(this.urlU, user);
  }

  inicisessio(user: Inicisessio): Observable<any>{
    return this.http.post(this.urlUI, user);
  }


}
