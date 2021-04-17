import { Component, OnInit } from '@angular/core';
import { ServicioGeneralService } from '../servicios/servicio-general.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.scss']
})
export class CrearClientesComponent implements OnInit {
  listaProductos: any = []

  formRegistroclientes: FormGroup;
  tipodocumento: string = this.servicioGeneral.listaActualizar.tipodocumento != null ? this.servicioGeneral.listaActualizar.tipodocumento : ''
  numeroDocumento: string = this.servicioGeneral.listaActualizar.numeroIdentificacion != null ? this.servicioGeneral.listaActualizar.numeroIdentificacion : ''
  completosNombre: string = this.servicioGeneral.listaActualizar.nombres != null ? this.servicioGeneral.listaActualizar.nombres : ''
  idProducto: string = this.servicioGeneral.listaActualizar.idProducto != null ? this.servicioGeneral.listaActualizar.idProducto : ''


  constructor(private http: HttpClient, public servicioGeneral: ServicioGeneralService) {
    this.cargarListaProductos()
  }
  ngOnInit() {
    this.formRegistroclientes = new FormGroup({
      tipodocumento: new FormControl('', [Validators.required]),
      numeroDocumento: new FormControl('', [Validators.required]),
      completosNombre: new FormControl('', [Validators.required]),
      idProducto: new FormControl('', [Validators.required]),
    });
  }
  cargarListaProductos() {
    this.http.get(environment.urlApi + '/listaProductos').subscribe(
      (data: Array<any>) => {
        this.listaProductos = data
      }, error => {
        console.log(error);
      });
  }
  registrarProductos() {
    if (this.formRegistroclientes.invalid)
      return;
    // this.servicioGeneral.MostrarModal('Error', ' Por favor ingresar todoos los datos', 'error', 'Aceptar')



    if (this.servicioGeneral.listaActualizar==[]){
      debugger
      const info2 = {
        idProducto: this.idProducto, tipodocumento: this.tipodocumento
        , numeroDocumento: this.numeroDocumento, completosNombre: this.completosNombre
      }
      this.http.post(environment.urlApi + '/insertarClientes', info2).subscribe(
        (data: Array<any>) => {          
          // this.servicioGeneral.MostrarModal('Exitoso', 'Se registro correctamente', 'success', 'Aceptar')

        }, error => {
          console.log(error);
          // this.servicioGeneral.MostrarModal('Error', ' Por favor vericar', 'error', 'Aceptar')
        });
    }
    else{
      debugger
      const info2 = {
        idProducto: this.idProducto, tipodocumento: this.tipodocumento
        , numeroDocumento: this.numeroDocumento, completosNombre: this.completosNombre,idusuario: this.servicioGeneral.listaActualizar.idusuario,
      }
      this.http.post(environment.urlApi + '/actualizaClientes', info2).subscribe(
        (data: Array<any>) => {          
          // this.servicioGeneral.MostrarModal('Exitoso', 'Se registro correctamente', 'success', 'Aceptar')

        }, error => {
          console.log(error);
          // this.servicioGeneral.MostrarModal('Error', ' Por favor vericar', 'error', 'Aceptar')
        });
    }
  }
  limpiarVariable(){
    this.servicioGeneral.listaActualizar=[]
  }

}
