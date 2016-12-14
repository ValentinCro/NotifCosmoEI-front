import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class HttpServiceService {

  baseUrl : string = "http://localhost:8080";

  constructor(private http: Http) { }

  generateHeader() {
    let token = localStorage.getItem('token');
    let authHeader = new Headers();
    let options = new RequestOptions({headers: authHeader});
    if(token != undefined) {
      authHeader.set('Authorization', 'Bearer ' + token);
    }
    console.log(options);
    return authHeader;
  }

  addProducts(body) {
    return this.http.post(this.baseUrl + '/products', body, {headers: this.generateHeader()});
  }

  addIngredients(body) {
    return this.http.post(this.baseUrl + '/ingredients', {headers: this.generateHeader()});
  }

  getAllProducts() {
    return this.http.get(this.baseUrl + '/products');
  }

  getAllIngredients() {
    return this.http.get(this.baseUrl + '/ingredients');
  }

  signup(body) {
    return this.http.post(this.baseUrl + '/user/signup', body);
  }

  signin(body) {
    return this.http.post(this.baseUrl + '/user/login', body);
  }
}
