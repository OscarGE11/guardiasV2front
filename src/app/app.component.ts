import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Usuario } from './_modelos/Usuario';
import { Guardias } from './_modelos/Guardias';
import { GuardiasService } from './_servicios/guardias.service';
import { UsuarioService } from './_servicios/usuarios.service';
import { NavComponent } from './_componentes/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
  
  

}


