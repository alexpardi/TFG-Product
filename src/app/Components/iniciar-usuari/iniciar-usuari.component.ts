import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProducteService} from "../../servei/producte.service";
import {AddUser} from "../../model/AddUser";
import { Inicisessio } from "../../model/Inicisessio";

@Component({
  selector: 'app-iniciar-usuari',
  templateUrl: './iniciar-usuari.component.html',
  styleUrls: ['./iniciar-usuari.component.css']
})
export class IniciarUsuariComponent {
  AddUserForm: FormGroup;
  InitSesionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private _producteService: ProducteService, private aRouter: ActivatedRoute) {
    this.AddUserForm=this.fb.group({
      CreaUsuari: ['', Validators.required],
      CreaEmail: ['', Validators.required],
      CreaNom: ['', Validators.required],
      CreaContrasenya: ['', Validators.required],
    });
    this.InitSesionForm=this.fb.group({
      IniciUsuari: ['', Validators.required],
      IniciContrasenya: ['', Validators.required],
    })
  }

  AddUsuari() {
    const USUARI: AddUser = {
      UserName: this.AddUserForm.get('CreaUsuari')?.value,
      UserMail: this.AddUserForm.get('CreaEmail')?.value,
      UserNameReal: this.AddUserForm.get('CreaNom')?.value,
      UserContrasenya: this.AddUserForm.get('CreaContrasenya')?.value,
    }

    console.log(USUARI);
    this._producteService.crearUsuari(USUARI).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.AddUserForm.reset();
    })

  }

  IniciaSessio(){
    const USUARI: Inicisessio = {
      UserName: this.AddUserForm.get('IniciUsuari')?.value,
      UserContrasenya: this.AddUserForm.get('IniciContrasenya')?.value,
    }

    console.log(USUARI);
    this._producteService.inicisessio(USUARI).subscribe(data => {
      this.router.navigate(['/modifica-usuari']);
    }, error => {
      console.log(error);
      this.AddUserForm.reset();
    })

  }
}
