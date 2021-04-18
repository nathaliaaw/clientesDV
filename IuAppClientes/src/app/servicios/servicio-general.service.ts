import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {
  listaTipoIdentificacion: any = []
  listaActualizar: any = []
//  Swal = require('sweetalert2')

  constructor(private http: HttpClient) {
    this.cargarTipoIdentificacion()
  }
  MostrarModal(titulo, mensaje, icono, textoBoton='') {
    Swal.fire(
      titulo,
      mensaje,
      icono
    )

  }
  cargarTipoIdentificacion() {
    this.http.get(environment.urlApi + '/tiposIdentificacion').subscribe(
      (data: Array<any>) => {

        this.listaTipoIdentificacion = data
      }, error => {
        console.log(error);
      });
  }
}
