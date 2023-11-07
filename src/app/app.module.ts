import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegistroComponent } from './registro/registro.component';
import { MainComponent } from './main/main.component';
import { OAuthModule } from 'angular-oauth2-oidc'; 
import{HttpClientModule} from '@angular/common/http';
import { EmpleadosComponent } from './components/empleados/empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    RegistroComponent,
    MainComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
