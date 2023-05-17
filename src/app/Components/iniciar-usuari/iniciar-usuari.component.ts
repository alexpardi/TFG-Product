import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProducteService} from "../../servei/producte.service";
import { Inicisessio } from "../../model/Inicisessio";

@Component({
  selector: 'app-iniciar-usuari',
  templateUrl: './iniciar-usuari.component.html',
  styleUrls: ['./iniciar-usuari.component.css']
})
export class IniciarUsuariComponent {

  InitSesionForm: FormGroup;
  isVisibleIS: boolean;


  constructor(private fb: FormBuilder, private router: Router, private _producteService: ProducteService, private aRouter: ActivatedRoute) {

    this.InitSesionForm=this.fb.group({
      IniciUsuari: ['', Validators.required],
      IniciContrasenya: ['', Validators.required],
    })
    this.isVisibleIS=false;
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
      //alert("L'usuari o la contrasenya son incorrectes");
      this.isVisibleIS = true;
      setTimeout(() => {
        this.isVisibleIS = false;
      }, 5000);
    })
  }
}
