import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{ environment } from '../../environments/environment';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;
  tipodocumento: string = ''  
  numeroDocumento: string = ''
  completosNombre: string = ''    
  usuario: string = ''
  clave: string = ''     
  listaTipoIdentificacion:any=[]
  constructor(private http: HttpClient) { 
    this.cargarTipoIdentificacion()
  }


  ngOnInit() {
    this.formRegistro = new FormGroup({
      tipodocumento: new FormControl('', [Validators.required]),
      numeroDocumento: new FormControl('', [Validators.required]),
      completosNombre: new FormControl('', [Validators.required]),    
      usuario: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required]),      
    });
  }
  cargarTipoIdentificacion(){
    
    const info2 = { }    
    this.http.get(environment.urlApi + '/tiposIdentificacion').subscribe(
      (data: Array<any>) => {
        
        this.listaTipoIdentificacion=data
        // this.datosfechaNoG = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
  regsitrarUsuario() {
    if (this.formRegistro.invalid)
      return;

    const info2 = { usuario: this.usuario, clave: this.clave }
    this.http.post(environment.urlApi + '/consultaLogin', info2).subscribe(
      (data: Array<any>) => {
        data
        // this.datosfechaNoG = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
}
