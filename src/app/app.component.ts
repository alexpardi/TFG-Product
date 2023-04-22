import { Component } from '@angular/core';
import { ProducteService } from "./servei/producte.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TFG-Product';

  constructor(public ProducteService: ProducteService) {
  }
}
