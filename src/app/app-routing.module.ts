import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LlistaProductesComponent} from "./Components/llista-productes/llista-productes.component";
import {CrearProducteComponent} from "./Components/crear-producte/crear-producte.component";
import {ModificaUsuariComponent} from "./Components/modifica-usuari/modifica-usuari.component";
import {IniciarUsuariComponent} from "./Components/iniciar-usuari/iniciar-usuari.component";
import {AuthGuard} from "./auth.guard";
import {AfegirUsuariComponent} from "./Components/afegir-usuari/afegir-usuari.component";


const routes: Routes = [
  { path: '', component: IniciarUsuariComponent},
  { path: 'login', component: IniciarUsuariComponent},
  { path: 'llistar-productes', component: LlistaProductesComponent, canActivate: [AuthGuard]},
  { path: 'crear-producte', component: CrearProducteComponent, canActivate: [AuthGuard]},
  { path: 'editar-producte/:id', component: CrearProducteComponent, canActivate: [AuthGuard]},
  { path: 'modifica-usuari', component: ModificaUsuariComponent, canActivate: [AuthGuard]},
  { path: 'crear-usuari', component: AfegirUsuariComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
