import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router"
import { HttpServiceService } from '../http-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login: string = "";
  firstname: string = "";
  lastname: string = "";
  password: string = "";
  password2: string = "";
  mail: string = "";


  constructor(private http: HttpServiceService, private router: Router) {
    if (localStorage.getItem('token') != undefined) {
      this.router.navigate([""]);
    }
  }

  ngOnInit() {
  }

  //fonction d'inscription
  register() {
    if (this.password == this.password2 && this.password.length >= 6 && this.password2.length >= 6
        && this.login.length >= 6 && this.firstname.length > 0 && this.lastname.length > 0
        && this.mail.length >= 6) {

      let user = {
        "userName" : this.login,
        "email" : this.mail,
        "firstName" : this.firstname,
        "lastName" : this.lastname,
        "password" : this.password,
        "role" : "USER"
      };

      //send donnée

      this.http.signup(user)
      // extract json body
        .map(res => res.json())
        .subscribe(res => {
          localStorage.setItem("token", res.token);
          this.router.navigate([""]);
        });
    }
  }
}
