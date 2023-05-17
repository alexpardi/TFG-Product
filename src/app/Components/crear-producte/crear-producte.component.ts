import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import {AddProducte} from 'src/app/model/AddProducte'
import {ActivatedRoute, Router} from "@angular/router";
import {ProducteService} from "../../servei/producte.service";

@Component({
  selector: 'app-crear-producte',
  templateUrl: './crear-producte.component.html',
  styleUrls: ['./crear-producte.component.css']
})
export class CrearProducteComponent implements OnInit{
  AddProductForm: FormGroup;
  titol_page = 'CREAR PRODUCTE';
  isVisibleMP: boolean;
  isVisibleCP: boolean;
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _producteService: ProducteService, private aRouter: ActivatedRoute) {
    this.AddProductForm=this.fb.group({
      IdProducte: ['', Validators.required],
      NomProducte: ['', Validators.required],
      PreuProd: ['', Validators.required],
      DescripcioProd: ['', Validators.required],
      TipusProd: ['', Validators.required],
      Esport: ['', Validators.required],
      Marca: ['', Validators.required],
      Imatge: ['', Validators.required],

      ProdAfegits: [''],
      ProdAfegitsS: [''],
      ProdAfegitsM: [''],
      ProdAfegitsL: [''],
      ProdAfegitsXL: [''],
      ProdAfegits37: [''],
      ProdAfegits38: [''],
      ProdAfegits39: [''],
      ProdAfegits40: [''],
      ProdAfegits41: [''],
      ProdAfegits42: [''],
      ProdAfegits43: [''],
      ProdAfegits44: [''],
      ProdAfegits45: [''],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.isVisibleCP=false;
    this.isVisibleMP=false;
  }

  ngOnInit(): void{
    this.EditaProd();
  }

  AddProduct(){

    const value = this.AddProductForm.get('Esport')?.value;
    var usingSplit = [];
    if(Array.isArray(value)){
      usingSplit = value;
    }else{
      usingSplit = value.split(',');
    }

    const PRODUCTE: AddProducte = {
      ProdID: this.AddProductForm.get('IdProducte')?.value,
      ProdNom: this.AddProductForm.get('NomProducte')?.value,
      ProdPreu: this.AddProductForm.get('PreuProd')?.value,
      ProdDescripcio: this.AddProductForm.get('DescripcioProd')?.value,
      ProdTipus: this.AddProductForm.get('TipusProd')?.value,
      ProdEsport: usingSplit,
      ProdMarca: this.AddProductForm.get('Marca')?.value,
      ProdImatge: this.AddProductForm.get('Imatge')?.value,

      ProdAfegits: this.AddProductForm.get('ProdAfegits')?.value,
      ProdAfegitsS: this.AddProductForm.get('ProdAfegitsS')?.value,
      ProdAfegitsM: this.AddProductForm.get('ProdAfegitsM')?.value,
      ProdAfegitsL: this.AddProductForm.get('ProdAfegitsL')?.value,
      ProdAfegitsXL: this.AddProductForm.get('ProdAfegitsXL')?.value,
      ProdAfegits37: this.AddProductForm.get('ProdAfegits37')?.value,
      ProdAfegits38: this.AddProductForm.get('ProdAfegits38')?.value,
      ProdAfegits39: this.AddProductForm.get('ProdAfegits39')?.value,
      ProdAfegits40: this.AddProductForm.get('ProdAfegits40')?.value,
      ProdAfegits41: this.AddProductForm.get('ProdAfegits41')?.value,
      ProdAfegits42: this.AddProductForm.get('ProdAfegits42')?.value,
      ProdAfegits43: this.AddProductForm.get('ProdAfegits43')?.value,
      ProdAfegits44: this.AddProductForm.get('ProdAfegits44')?.value,
      ProdAfegits45: this.AddProductForm.get('ProdAfegits45')?.value,

    }

    /*
    // Revisar esta parte de actualizar productos
    const usingSplit = this.AddProductForm.get('Esport')?.value.split(',');
    const PRODUCTE: AddProducte = {
      ProdID: this.AddProductForm.get('IdProducte')?.value,
      ProdNom: this.AddProductForm.get('NomProducte')?.value,
      ProdAfegits: this.AddProductForm.get('ProdAfegits')?.value,
      ProdPreu: this.AddProductForm.get('PreuProd')?.value,
      ProdTalla: this.AddProductForm.get('TallaProd')?.value,
      ProdDescripcio: this.AddProductForm.get('DescripcioProd')?.value,
      ProdTipus: this.AddProductForm.get('TipusProd')?.value,
      ProdEsport: usingSplit,
      ProdMarca: this.AddProductForm.get('Marca')?.value,
      ProdImatge: this.AddProductForm.get('Imatge')?.value,
    }*/


    if(this.id != null){
      //editem producte
      this._producteService.modificarProducte(this.id, PRODUCTE).subscribe(data=> {
        this.router.navigate(['/llistar-productes']);
      }, error => {
        console.log(error);
        //this.AddProductForm.reset();
        //alert("El producte ja existeix o no s'ha pogut crear de manera correcte.");
        this.isVisibleMP = true;
        setTimeout(() => {
          this.isVisibleMP = false;
        }, 5000);
      })
    }else{
      //afegim producte
      console.log(PRODUCTE);
      this._producteService.crearProducte(PRODUCTE).subscribe(data => {
        this.router.navigate(['/llistar-productes']);
      }, error => {
        console.log(error);
        //this.AddProductForm.reset();
        //alert("El producte ja existeix o no s'ha pogut crear de manera correcte.");
        this.isVisibleCP = true;
        setTimeout(() => {
          this.isVisibleCP = false;
        }, 5000);
      })
    }

  }

  EditaProd() {
    if(this.id !== null){
      this.titol_page = 'EDITAR PRODUCTE';

      this._producteService.editarProducte(this.id).subscribe(data=> {

        this.AddProductForm=this.fb.group({
          IdProducte: data.ProdID,
          NomProducte: data.ProdNom,
          PreuProd: data.ProdPreu,
          DescripcioProd: data.ProdDescripcio,
          TipusProd: data.ProdTipus,
          Esport: data.ProdEsport.toString(),
          Marca: data.ProdMarca,
          Imatge: data.ProdImatge,

          ProdAfegits: data.ProdAfegits,
          ProdAfegitsS: data.ProdAfegitsS,
          ProdAfegitsM: data.ProdAfegitsM,
          ProdAfegitsL: data.ProdAfegitsL,
          ProdAfegitsXL: data.ProdAfegitsXL,
          ProdAfegits37: data.ProdAfegits37,
          ProdAfegits38: data.ProdAfegits38,
          ProdAfegits39: data.ProdAfegits39,
          ProdAfegits40: data.ProdAfegits40,
          ProdAfegits41: data.ProdAfegits41,
          ProdAfegits42: data.ProdAfegits42,
          ProdAfegits43: data.ProdAfegits43,
          ProdAfegits44: data.ProdAfegits44,
          ProdAfegits45: data.ProdAfegits45,
        })

        console.log(data);
      })
    }
  }

}
