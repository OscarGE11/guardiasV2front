import { Component } from '@angular/core';
import { RouterLink, RouterModule,Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Usuario } from '../../_modelos/Usuario';

import { Rol } from '../../_modelos/Rol';
import { UsuarioService } from '../../_servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  token: Usuario[] = [];
  form:FormGroup;

  constructor(private servicioUsuario:UsuarioService,private router:Router){
    this.form = new FormGroup({
      'nombre': new FormControl(''),
      'email': new FormControl(''),
      'pw1': new FormControl(''),
      'pw2': new FormControl(''),
    });
  }

  registrar() {
    const pw1 = this.form.value['pw1'];
    const pw2 = this.form.value['pw2'];
  
    // Expresión regular para validar la contraseña 1 minúscula, 1 mayúscula, 1 número y mínimo 4 caracteres
    const expresRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,}$/;
  
    if (expresRegular.test(pw1)) {
      if (pw1 === pw2) {
        let u: Usuario = {
          'id_usuario': 0,
          'nombre': this.form.value['nombre'],
          'email': this.form.value['email'],
          'password': pw1,
          'rol': Rol.USER
        }
        this.servicioUsuario.alta(u).subscribe((data) => {
          this.router.navigate(['/login']);
        });
        
      } else {
        console.log('error de contraseñas: ambas contraseñas tienen que ser iguales');
      }
    } else {
      console.log('error de contraseña: La contraseña introducida no cumple los requisitos de seguridad. Por favor, introduce 1 minúscula, 1 mayúscula, 1 número y un mínimo 4 caracteres');
    }
  }



}
