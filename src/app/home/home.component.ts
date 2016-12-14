import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : any = [];
  constructor(private http: Http) {
    this.getProducts();
  }

  getProducts () {
    this.http.get("http://localhost:8080/products")
    // extract json body
      .map(res => res.json())
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnInit() {
  }

}
