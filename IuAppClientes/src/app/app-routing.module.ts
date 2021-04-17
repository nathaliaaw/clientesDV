import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CrearClientesComponent } from './crear-clientes/crear-clientes.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'crearClientes', component: CrearClientesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
