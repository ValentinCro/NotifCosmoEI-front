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

  }
}
