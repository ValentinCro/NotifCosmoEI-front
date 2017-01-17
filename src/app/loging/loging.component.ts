import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
  login: string = "";
  password: string = "";
  constructor(public http: HttpServiceService, private router: Router) {
    if (localStorage.getItem('token') != undefined) {
      this.router.navigate([""]);
    }

  }

  ngOnInit() {
  }

  //fonction de connexion
  log() {

    let user = {
      "name" : this.login,
      "password" : this.password
    };

    //send donnée
    this.http.signin(user)
    // extract json body
      .map(res => res.json())
      .subscribe(res => {
        localStorage.setItem("token", res.token);
        this.router.navigate([""]);
      });


  }

}
