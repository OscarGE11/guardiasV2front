import { Usuario } from "./Usuario";

export interface Guardias {


    id_guardias?:number;
    dia_semana:string;
    hora:string;
    aula:string;
    usuario:Usuario;


}