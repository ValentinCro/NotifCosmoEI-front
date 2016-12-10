import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";

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
  http: any;
  constructor(private h: Http) {
    this.http = h;
  }

  ngOnInit() {
  }

  //fonction d'inscription
  register() {
    if (this.password == this.password2 && this.password.length >= 6 && this.password2.length >= 6
        && this.login.length >= 6 && this.firstname.length > 0 && this.lastname.length > 0) {

      let user = {
        username: this.login,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password
      }

      //send donnée
      this.http.post("localhost:8080/signup", user)
      // extract json body
        .map(res => res.json())
        .subscribe(races => {
          // store the array of the races in the component
          console.log(races);
        });
    }
  }
}
