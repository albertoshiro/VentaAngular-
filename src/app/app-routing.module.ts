import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  //este primer enrutamiento es para mandar a una ruta especifica cuando no se le envie nada en la ruta
  {path : '',redirectTo : '/home',pathMatch : 'full'},
  {path :'home', component : HomeComponent },
  {path :'cliente', component : ClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
