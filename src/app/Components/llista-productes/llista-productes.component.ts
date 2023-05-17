import { Component } from '@angular/core';
import {ProducteService} from "../../servei/producte.service";
import {AddProducte} from "src/app/model/AddProducte"
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {query} from "@angular/animations";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-llista-productes',
  templateUrl: './llista-productes.component.html',
  styleUrls: ['./llista-productes.component.css']
})
export class LlistaProductesComponent {
  listProductes: AddProducte[] = [];
  searchText: any;
  constructor( private _producteService: ProducteService) {
  }

  ngOnInit(): void{
    this.obtenirProductes();
  }

  obtenirProductes(){
    this._producteService.getProductes().subscribe(data=>{
        console.log(data);
        this.listProductes = data;
      }, error => {
      console.log(error);
    })
  }

  eliminarProducte(id: any){
    if(confirm('Estas segur que vols eliminar aquest producte?')){
      this._producteService.eliminarProducte(id).subscribe(data => {
        this.obtenirProductes();
      }, error => {
        console.log(error);
      })
    }
  }

}
