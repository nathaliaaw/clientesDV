import { Injectable } from '@angular/core';
import swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {

  constructor() { }
  MostrarModal(titulo, mensaje, icono, textoBoton) {
    swal.fire({
      title: titulo,
      text: mensaje,
      icon: icono,
      confirmButtonText: textoBoton
    })
  }
}
