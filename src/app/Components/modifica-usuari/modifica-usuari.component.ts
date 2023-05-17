import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { ProducteService } from "../../servei/producte.service";
import {modiUser} from "../../model/modiUser"
import {Inicisessio} from "../../model/Inicisessio";

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-modifica-usuari',
  templateUrl: './modifica-usuari.component.html',
  styleUrls: ['./modifica-usuari.component.css']
})

export class ModificaUsuariComponent implements OnInit{

  modiUserForm: FormGroup;

  id: string | null;
  isVisibleMU: boolean;


  constructor(private fb: FormBuilder, private router: Router, public ProducteService: ProducteService, private aRouter: ActivatedRoute) {
    this.modiUserForm=this.fb.group({
      // Aqui hay que inicializar el ModUsuari a el usuario que pille del token!!!!
      ModUsuari: this.getToken(),
      ModEmail: ['', Validators.required],
      ModNom: ['', Validators.required],
      ModContrasenya: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.isVisibleMU=false;
  }

  ngOnInit(): void{
    this.EditaUsuari();
  }

  modificarUser(){
    const USER: modiUser = {
      ModUsuari: this.modiUserForm.get('ModUsuari')?.value,
      ModEmail: this.modiUserForm.get('ModEmail')?.value,
      ModNom: this.modiUserForm.get('ModNom')?.value,
      ModContrasenya: this.modiUserForm.get('ModContrasenya')?.value,
    }

    this.ProducteService.modificaUsuari(USER).subscribe(data=> {
      this.router.navigate(['/llistar-productes']);
    }, error => {
      console.log(error);
      //this.AddProductForm.reset();
      //alert("No s'ha pogut modificar l'usuari.");
      this.isVisibleMU = true;
      setTimeout(() => {
        this.isVisibleMU = false;
      }, 5000);
    })

  }

  EditaUsuari(){
    if(this.id !== null){

      this.ProducteService.editarUsuari(this.id).subscribe(data=> {
        this.modiUserForm.setValue({
          ModUsuari: data.ModUsuari,
          ModEmail: data.ModEmail,
          ModNom: data.ModNom,
          ModContrasenya: data.ModContrasenya,
        })

        console.log(data);
      })
    }
  }

  getToken(){
    var jwt = localStorage.getItem('token');
    if(jwt){
      const tokenInfo = jwt_decode(jwt);

      let part = Object(tokenInfo).UserName;
      return part
    }
  }

}
