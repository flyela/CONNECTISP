import { Component } from '@angular/core';
import { Auth } from '@firebase/auth';

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

  /*constructor(private autService: AuthService){
      
  }*/

  Acceder() {

    console.log(this.usuario);
  }

}
