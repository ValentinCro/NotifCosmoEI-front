import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
  login: string = "";
  password: string = "";
  stayConnected : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  //fonction de connexion
  log() {

  }

}
