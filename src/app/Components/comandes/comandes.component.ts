import {Component, OnInit} from '@angular/core';
import {AddProducte} from "../../model/AddProducte";
import {ProducteService} from "../../servei/producte.service";
import {Comandes} from "../../model/comandes";

@Component({
  selector: 'app-comandes',
  templateUrl: './comandes.component.html',
  styleUrls: ['./comandes.component.css']
})
export class ComandesComponent implements OnInit{

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

  realitzaComanda(id: any){
    this._producteService.realitzaComanda(id).subscribe(data=>{
      this.reload();
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  norealitzaComanda(id: any){
    this._producteService.norealitzaComanda(id).subscribe(data=>{
      this.reload();
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  reload(){
    window.location.reload();
  }
}
