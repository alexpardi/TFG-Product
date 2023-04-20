import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AddProducte} from 'src/app/model/AddProducte'
import {ActivatedRoute, Router} from "@angular/router";
import {ProducteService} from "../../servei/producte.service";

@Component({
  selector: 'app-crear-producte',
  templateUrl: './crear-producte.component.html',
  styleUrls: ['./crear-producte.component.css']
})
export class CrearProducteComponent{
  AddProductForm: FormGroup;
  titol_page = 'CREAR PRODUCTE';
  /* Funciona con lo de abajo tambien comentado
  ProducteID = 'ID del producte';
  ProducteNom= 'Nom del producte';
  ProducteAfegits= 'Numero de productes afegits';
  ProductePreu= 'Preu';
  ProducteTalla= 'Talla del producte';
  ProducteDescripcio= 'Descripció del producte';
  ProducteImatge= 'Afegir imatge';*/

  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _producteService: ProducteService, private aRouter: ActivatedRoute) {
    this.AddProductForm=this.fb.group({
      IdProducte: ['', Validators.required],
      NomProducte: ['', Validators.required],
      ProdAfegits: ['', Validators.required],
      PreuProd: ['', Validators.required],
      TallaProd: ['', Validators.required],
      DescripcioProd: ['', Validators.required],
      Imatge: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.EditaProd();
  }

  AddProduct(){
    const PRODUCTE: AddProducte = {
      ProdID: this.AddProductForm.get('IdProducte')?.value,
      ProdNom: this.AddProductForm.get('NomProducte')?.value,
      ProdAfegits: this.AddProductForm.get('ProdAfegits')?.value,
      ProdPreu: this.AddProductForm.get('PreuProd')?.value,
      ProdTalla: this.AddProductForm.get('TallaProd')?.value,
      ProdDescripcio: this.AddProductForm.get('DescripcioProd')?.value,
      ProdImatge: this.AddProductForm.get('Imatge')?.value,
    }

    if(this.id != null){
      //editem producte
      this._producteService.modificarProducte(this.id, PRODUCTE).subscribe(data=> {
        this.router.navigate(['/llistar-productes']);
      }, error => {
        console.log(error);
        this.AddProductForm.reset();
      })
    }else{
      //afegim producte
      console.log(PRODUCTE);
      this._producteService.crearProducte(PRODUCTE).subscribe(data => {
        this.router.navigate(['/llistar-productes']);
      }, error => {
        console.log(error);
        this.AddProductForm.reset();
      })
    }

  }

  EditaProd(){
    if(this.id !== null){
      this.titol_page = 'EDITAR PRODUCTE';

      this._producteService.editarProducte(this.id).subscribe(data=> {
        /* Funciona pero no es lo que quiero
        this.ProducteID = data.ProdID;
        this.ProducteNom = data.ProdNom;
        this.ProducteDescripcio = data.ProdNom;
        this.ProducteImatge= data.ProdNom;
        this.ProductePreu= data.ProdNom;
        this.ProducteTalla =data.ProdNom;
        this.ProducteAfegits= data.ProdNom;*/

        this.AddProductForm.setValue({
          IdProducte: data.ProdID,
          NomProducte: data.NomProducte,
          ProdAfegits: data.ProdAfegits,
          ProdPreu: data.PreuProd,
          ProdTalla: data.TallaProd,
          ProdDescripcio: data.DescripcioProd,
          ProdImatge: data.Imatge,
        })
      })
    }
  }

}
