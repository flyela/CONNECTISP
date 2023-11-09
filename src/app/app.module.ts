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
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { NavbarComponent } from './components/navbar/navbar.component';

// declaracion de firebase config paquete de internet - no tengo los enverioments
const firebaseConfig = {
  apiKey: "AIzaSyBql3OJLVdNAqgJj8Zg3CWDAMstKghCsrw",
  authDomain: "bdconnectisp.firebaseapp.com",
  projectId: "bdconnectisp",
  storageBucket: "bdconnectisp.appspot.com",
  messagingSenderId: "83704699353",
  appId: "1:83704699353:web:e0db2feee10795b85561c8",
  measurementId: "G-PY0GN8Q2LQ"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    RegistroComponent,
    MainComponent,
    EmpleadosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
