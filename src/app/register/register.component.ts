import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login: string = "";
  password: string = "";
  password2: string = "";
  constructor() { }

  ngOnInit() {
  }

  //fonction d'inscription
  register() {
    if (this.password == this.password2 && this.password.length >= 6 && this.password2.length >= 6
        && this.login.length >= 6) {
      //send donnée
    }
  }
}
