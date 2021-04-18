import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{ environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { ServicioGeneralService } from '../servicios/servicio-general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  usuario:string=''
  clave:string=''
  
  // @ViewChild('alertaLogin', { static: true }) private alertaLogin: SwalComponent;

  constructor(private http: HttpClient
    ,public _router: Router
    , public servicioGeneral: ServicioGeneralService) { }


  ngOnInit() {
    this.formLogin = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required]),
    })
  }
  login() {    
    if (this.formLogin.invalid){
      this.servicioGeneral.MostrarModal('Error', ' Por favor ingresar todos los datos', 'error', 'Aceptar')
      return;
   }

      const info2 = { usuario: this.usuario,clave:this.clave}
      this.http.post(environment.urlApi + '/consultaLogin',info2).subscribe(
        (data: Array<any>) => {
          if(data.length>0){
            this._router.navigate(['/clientes'])
          }
          else{

          }
          
      }, error => {
        console.log(error);
      });
  }


}
