import { Component } from '@angular/core';
import { Auth } from '@firebase/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = {
    email: '',
    password: '',
  }

  constructor(private authService:AuthService){
      
 }

  Ingresar() {

    console.log(this.usuario);
    const {email, password}= this.usuario;
    this.authService.registrar(email, password).then(res => {
      console.log("se registro")
    })
  }

  IngresarConGoogle(){
    const {email, password}= this.usuario;
    this.authService.loginWhitGoogle(email, password).then(res => {
      console.log("se registro")
    })

  }

}
