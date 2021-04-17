import { Component, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

import { SelectorListContext } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'iuAppAlertas';
  datos: Array<any>;
  datosfechaG;datosfechaNoG: Array<any>;
  id:number=4;
  fecha1:string;
  fecha2:string;
  Gestionadas;NoGestionadas:boolean;
  CGestionadas:Int32Array;
  
  //txtNombre: string;
  @Input() datoSeleccionado:string;

  constructor(private http: HttpClient) {

    // this.http.get(environment.urlApi + '/Selec').subscribe(
    //   (data: Array<any>) => {
    //     this.datos = data;
    // }, error => {
    //   console.log(error);
    // });

  }
  clic(CGestionadas){  
    const info2 = { fecha1: this.fecha1,fecha2:this.fecha2}
    this.http.post(environment.urlApi + '/PNoGestionadas',info2).subscribe(
      (data: Array<any>) => {
        this.datosfechaNoG = data;
        console.log(data);
    }, error => {
      console.log(error);
    });
    this.http.post(environment.urlApi + '/PGestionadas',info2).subscribe(
      (data: Array<any>) => {
        this.datosfechaG = data;
    }, error => {
      console.log(error);
    });
  }
  Gestion(){
    this.Gestionadas=true;
    this.NoGestionadas=false;
    this.clic(1);
  }
  NoGestion(){
    this.Gestionadas=false;
    this.NoGestionadas=true;
    this.clic(0);
  }

}
