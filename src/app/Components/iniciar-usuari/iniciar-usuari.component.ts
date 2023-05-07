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
    this._producteService.crearUsuari(USUARI).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.token)
      this.router.navigate(['/llistar-productes']);
    }, error => {
      console.log(error);
      //this.AddUserForm.reset();
      alert("Datos incorrectos");
    })

  }

  IniciaSessio(){
    const USUARI: Inicisessio = {
      UserName: this.InitSesionForm.get('IniciUsuari')?.value,
      UserContrasenya: this.InitSesionForm.get('IniciContrasenya')?.value,
    }

    console.log(USUARI);
    this._producteService.inicisessio(USUARI).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.token)
      this.router.navigate(['/llistar-productes']);
    }, error => {
      console.log(error);
      //this.InitSesionForm.reset();
      alert("L'usuari o la contrasenya son incorrectes");
    })
  }
}
