import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [

  {path: '', component: LoginComponent },
  {path:'main', component: MainComponent},
  {path:'login', component: LoginComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'registro', component: RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
