import { Routes } from '@angular/router';
import { RegistroComponent } from './_componentes/registro/registro.component';
import { LoginComponent } from './_componentes/login/login.component';
import { MainComponent } from './_componentes/main/main.component';
import { GuardiasComponent } from './_componentes/guardias/guardias.component';

export const routes: Routes = [


    {"path":"",redirectTo:"/login",pathMatch:"full"},
    {"path":"login",component: LoginComponent},
    {"path":"registro",component:RegistroComponent},
    {"path":"main",component:MainComponent},
    {"path":"guardias",component:GuardiasComponent},

];
