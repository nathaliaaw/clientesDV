import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{ environment } from '../../environments/environment';

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

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.formLogin = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required]),
    })
  }
  login() {
    debugger
    if (this.formLogin.invalid)
      return

      const info2 = { usuario: this.usuario,clave:this.clave}
      this.http.post(environment.urlApi + '/consultaLogin',info2).subscribe(
        (data: Array<any>) => {
          data
          // this.datosfechaNoG = data;
          console.log(data);
      }, error => {
        console.log(error);
      });
  }


}
