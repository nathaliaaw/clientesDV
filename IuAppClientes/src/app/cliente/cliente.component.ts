import { Component, OnInit } from '@angular/core';
import { ServicioGeneralService } from '../servicios/servicio-general.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
// import * as jspdf from 'jspdf';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { debug } from 'util';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  listaClientesD: any = []
  constructor(private http: HttpClient, public servicioGeneral: ServicioGeneralService) {
    this.listaClientes()
  }

  ngOnInit() {
  }
  listaClientes() {
    this.http.get(environment.urlApi + '/listaclientes').subscribe(
      (data: Array<any>) => {
        this.listaClientesD = data
      }, error => {
        console.log(error);
        this.servicioGeneral.MostrarModal('Error', ' Por favor vericar', 'error', 'Aceptar')
      });
  }
  actualizarCliente(item) {
    this.servicioGeneral.listaActualizar = item;
  }
  limpiarVariable() {
    this.servicioGeneral.listaActualizar = []
  }
  exportAsPDF() {
    // Extraemos el
    const DATA = document.getElementById('MyDIv');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_Reporte.pdf`);
    });
  }


}
