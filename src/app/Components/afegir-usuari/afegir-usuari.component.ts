import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProducteService} from "../../servei/producte.service";
import {AddUser} from "../../model/AddUser";

@Component({
  selector: 'app-afegir-usuari',
  templateUrl: './afegir-usuari.component.html',
  styleUrls: ['./afegir-usuari.component.css']
})
export class AfegirUsuariComponent {
  AddUserForm: FormGroup;

  isVisibleCU: boolean;
  isVisibleCUC: boolean;

  constructor(private fb: FormBuilder, private router: Router, private _producteService: ProducteService, private aRouter: ActivatedRoute) {
    this.AddUserForm=this.fb.group({
      CreaUsuari: ['', Validators.required],
      CreaEmail: ['', Validators.required],
      CreaNom: ['', Validators.required],
      CreaContrasenya: ['', Validators.required],
    });
    this.isVisibleCU=false;
    this.isVisibleCUC=false;
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
      //localStorage.setItem('token', res.token)
      //this.router.navigate(['/llistar-productes']);
      this.AddUserForm.reset();
      this.isVisibleCUC = true;
      setTimeout(() => {
        this.isVisibleCUC = false;
      }, 5000);
    }, error => {
      console.log(error);
      //this.AddUserForm.reset();
      //alert("Datos incorrectos");
      this.isVisibleCU = true;
      setTimeout(() => {
        this.isVisibleCU = false;
      }, 5000);
    })

  }

}
