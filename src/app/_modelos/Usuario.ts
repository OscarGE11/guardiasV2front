import { Rol } from "./Rol";

export interface Usuario {
    id_usuario:number;
    nombre?:string;
    email?:string;
    password?:string;
    rol?:Rol


}