import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guardias } from '../_modelos/Guardias';

@Injectable({
  providedIn: 'root'
})
export class GuardiasService {

  url:string="http://localhost:8080/guardias"

  constructor(private http:HttpClient) { }


  listarGuardias():Observable<Guardias[]>{
    return this.http.get<Guardias[]>(`${this.url}`);
  }

  altaGuardia(guardia:Guardias){
    return this.http.post<Guardias>(this.url,guardia);
  }
}
