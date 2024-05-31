import { Component } from '@angular/core';
import { GuardiasService } from '../../_servicios/guardias.service';
import { Guardias } from '../../_modelos/Guardias';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../_modelos/Usuario';
import { UsuarioService } from '../../_servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './guardias.component.html',
  styleUrl: './guardias.component.css'
})
export class GuardiasComponent {

  arrayGuardias:Guardias[]=[];
  form:FormGroup;
  arrayUsuarios:Usuario[]=[];
  usuario:Usuario= {
    "id_usuario":0
  }
  guardia:Guardias= {
    "aula":"",
    "dia_semana":"",
    "hora":"",
    'usuario':{
      'id_usuario':0
    }
  }

  horas:string[]=["m1","m2","m3","RecreoMañana","m4","m5","m6","m7","t1","t2","t3","t4","t5","t6"];

  diasDeLaSemana: string[] = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ];
  


constructor(private guardiasServicio:GuardiasService,private usuarioServicio:UsuarioService,private route:Router) {

  this.form = new FormGroup({
    'id_usuario': new FormControl(0),
    'aula': new FormControl(''),
    'dia_semana': new FormControl(''),
    'hora': new FormControl('')
  });


}

  ngOnInit(): void {
    
    this.guardiasServicio.listarGuardias().subscribe(data => {
      this.arrayGuardias=data;
    })

    this.usuarioServicio.listar().subscribe(data => {
      this.arrayUsuarios=data;
    })
    
  }

  crearGuardia(){
    
    
  this.guardia= {

      "aula":this.form.value['aula'],
      "dia_semana":this.form.value['dia_semana'],
      "hora":this.form.value['hora'],
      "usuario": {
        'id_usuario':this.form.value['id_usuario']
  }
}
console.log(this.guardia);

    this.guardiasServicio.altaGuardia(this.guardia).subscribe((data)=> {
      console.log(data);
      window.location.reload();
    });
    
  };

}
