import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SigninRequest } from '../../_modelos/_seguridad/SigninRequest';
import { JwtAuthenticationResponse } from '../../_modelos/_seguridad/JwtAuthenticationResponse';
import { entorno } from '../../_modelos/_seguridad/entorno';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }

  autenticar(datos:SigninRequest){
    console.log(datos);
    return this.http.post<JwtAuthenticationResponse>(`${entorno.HOSTNAME}/auth/signin`,datos)
  }
  estaLogueado(){
    let token = sessionStorage.getItem(entorno.TOKEN_NAME);
    return token != null;
  }
  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
