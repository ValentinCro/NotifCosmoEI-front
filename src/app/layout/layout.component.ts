import { Component, OnInit } from '@angular/core';
import {isUndefined} from "util";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isConnected() {
    return localStorage.getItem("token") != undefined;
  }

  disconnect() {
    localStorage.removeItem("token");
  }
}
