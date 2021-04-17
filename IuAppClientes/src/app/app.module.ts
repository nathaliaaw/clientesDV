import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbdDatepickerPopup } from './datepicker-popup';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearClientesComponent } from './crear-clientes/crear-clientes.component';
import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
  declarations: [
    AppComponent, NgbdDatepickerPopup, ClienteComponent, LoginComponent, RegistroComponent, CrearClientesComponent, ReportesComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    FormsModule , NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
