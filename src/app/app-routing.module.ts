import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LlistaProductesComponent} from "./Components/llista-productes/llista-productes.component";
import {CrearProducteComponent} from "./Components/crear-producte/crear-producte.component";
import {ModificaUsuariComponent} from "./Components/modifica-usuari/modifica-usuari.component";
import {IniciarUsuariComponent} from "./Components/iniciar-usuari/iniciar-usuari.component";


const routes: Routes = [
  { path: '', component: IniciarUsuariComponent},
  { path: 'login', component: IniciarUsuariComponent},
  { path: 'llistar-productes', component: LlistaProductesComponent},
  { path: 'crear-producte', component: CrearProducteComponent},
  { path: 'editar-producte/:id', component: CrearProducteComponent},
  { path: 'modifica-usuari', component: ModificaUsuariComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
