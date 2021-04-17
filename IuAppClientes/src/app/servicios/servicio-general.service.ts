import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {
  listaTipoIdentificacion: any = []
  listaActualizar:any=[]

  constructor(private http: HttpClient) { 
    this.cargarTipoIdentificacion()
  }
  // MostrarModal(titulo, mensaje, icono, textoBoton) {    
  //   swal.fire({
  //     title: titulo,
  //     text: mensaje,
  //     icon: icono,
  //     confirmButtonText: textoBoton
  //   })
  // }
  cargarTipoIdentificacion() {
    this.http.get(environment.urlApi + '/tiposIdentificacion').subscribe(
      (data: Array<any>) => {

        this.listaTipoIdentificacion = data     
      }, error => {
        console.log(error);
      });
  }
}
