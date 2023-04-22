import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { ProducteService } from "../../servei/producte.service";
import {modiUser} from "../../model/modiUser"

@Component({
  selector: 'app-modifica-usuari',
  templateUrl: './modifica-usuari.component.html',
  styleUrls: ['./modifica-usuari.component.css']
})

export class ModificaUsuariComponent implements OnInit{

  modiUserForm: FormGroup;

  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, public ProducteService: ProducteService, private aRouter: ActivatedRoute) {
    this.modiUserForm=this.fb.group({
      ModUsuari: ['', Validators.required],
      ModEmail: ['', Validators.required],
      ModNom: ['', Validators.required],
      ModContrasenya: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
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

    if(this.id != null){
      this.ProducteService.modificaUsuari(USER).subscribe(data=> {
        this.router.navigate(['/llistar-productes']);
      }, error => {
        console.log(error);
        //this.AddProductForm.reset();
        alert("No s'ha pogut modificar l'usuari.");
      })
    }
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

}
