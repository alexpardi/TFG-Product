import { Component } from '@angular/core';
import {AddProducte} from "../../model/AddProducte";
import {ProducteService} from "../../servei/producte.service";
import {Comandes} from "../../model/comandes";

@Component({
  selector: 'app-comandes',
  templateUrl: './comandes.component.html',
  styleUrls: ['./comandes.component.css']
})
export class ComandesComponent {

  listComandes: Comandes[] = [];

  constructor( private _producteService: ProducteService) {

  }

  ngOnInit(): void{
    this.obtenirComandes();
  }

  obtenirComandes(){
    this._producteService.getComanda().subscribe(data=>{
      console.log(data);
      this.listComandes = data;
    }, error => {
      console.log(error);
    })
  }
}
