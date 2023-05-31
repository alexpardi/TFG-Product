import {Component, OnInit} from '@angular/core';
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
export class LlistaProductesComponent implements OnInit{
  listProductes: AddProducte[] = [];
  searchText: any;
  ordenar: number;

  constructor( private _producteService: ProducteService) {
    this.ordenar=0;
  }

  ngOnInit(): void{
    this.obtenirProductes(this.ordenar);
  }

  obtenirProductes(ordenar:any){
    this._producteService.getProductes().subscribe(data=>{
        console.log(data);
        this.listProductes = data;
        if (ordenar==1) {
          this.listProductes.sort(function (a, b) {
            if (a.ProdID > b.ProdID) {
              return 1;
            }
            if (a.ProdID < b.ProdID) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        }else if (ordenar == 2){
          this.listProductes.sort(function (a, b) {
            if (a.ProdNom > b.ProdNom) {
              return 1;
            }
            if (a.ProdNom < b.ProdNom) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        }else if (ordenar == 3){
          this.listProductes.sort(function (a, b) {
            if (a.ProdMarca > b.ProdMarca) {
              return 1;
            }
            if (a.ProdMarca < b.ProdMarca) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        }else if (ordenar == 4){
          this.listProductes.sort(function (a, b) {
            if (a.ProdPreu > b.ProdPreu) {
              return 1;
            }
            if (a.ProdPreu < b.ProdPreu) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        }else if (ordenar == 5){
          this.listProductes.sort(function (a, b) {
            if (a.ProdPreu > b.ProdPreu) {
              return -1;
            }
            if (a.ProdPreu < b.ProdPreu) {
              return 1;
            }
            // a must be equal to b
            return 0;
          });
        }

      }, error => {
      console.log(error);
    })
  }

  reload(){
    window.location.reload();
  }

  eliminarProducte(id: any) {
    //if(confirm('Estas segur que vols eliminar aquest producte?')){
    this._producteService.eliminarProducte(id).subscribe(data => {
      this.obtenirProductes(this.ordenar);
    }, error => {
      console.log(error);
    })
    //}
  }

}
