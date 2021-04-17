import { Component, OnInit } from '@angular/core';
import { ServicioGeneralService } from '../servicios/servicio-general.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  listaClientesD:any=[]
  constructor(private http: HttpClient, public servicioGeneral: ServicioGeneralService) {
    this.listaClientes()
  }

  ngOnInit() {
  }
  listaClientes() {
    this.http.get(environment.urlApi + '/listaclientes').subscribe(
      (data: Array<any>) => {
        this.listaClientesD=data
      }, error => {
        console.log(error);
        // this.servicioGeneral.MostrarModal('Error', ' Por favor vericar', 'error', 'Aceptar')
      });
  }
  actualizarCliente(item){
    this.servicioGeneral.listaActualizar=item;
  }
  limpiarVariable(){
    this.servicioGeneral.listaActualizar=[]
  }

}
