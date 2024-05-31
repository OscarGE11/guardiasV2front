import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario } from '../_modelos/Usuario';
import { JwtAuthenticationResponse } from '../_modelos/_seguridad/JwtAuthenticationResponse';
import { entorno } from '../_modelos/_seguridad/entorno';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = `http://localhost:8080/usuarios`;

  constructor(private http:HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }
  
  listarPorId(id: number) {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }
  
  alta(u: Usuario) {
    return this.http.post<JwtAuthenticationResponse>(`${entorno.HOSTNAME}/auth/signup`, u);
  }
  
  modificar(u: Usuario) {
    return this.http.put(this.url, u);
  }
  
  eliminarUsuario(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listarPorCorreo(email:String){
    return this.http.get<Usuario>(`${this.url}/usuario/${email}`)
  }
}
