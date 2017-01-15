import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class HttpServiceService {

  baseUrl : string = "http://localhost:8080";

  constructor(private http: Http) { }

  generateHeader() {
    let token = localStorage.getItem('token');
    let authHeader = new Headers();
    if(token != undefined) {
      authHeader = new Headers({'Authorization' : 'Bearer ' + token});
    }

    return new RequestOptions({headers: authHeader});
  }

  searchProducts(arg) {
    return this.http.get(this.baseUrl + '/products/search?value=' + arg);
  }

  searchIngredients(arg) {
    return this.http.get(this.baseUrl + '/ingredients/search?value=' + arg);
  }

  searchEffects(arg) {
    return this.http.get(this.baseUrl + '/effects/search?value=' + arg);
  }

  addProducts(body) {
    let header = this.generateHeader();
    return this.http.post(this.baseUrl + '/products', body, header);
  }

  addIngredients(body) {
    let header = this.generateHeader();
    return this.http.post(this.baseUrl + '/ingredients', body, header);
  }

  addNotifications(body) {
    let header = this.generateHeader();
    return this.http.post(this.baseUrl + '/notifications', body, header);
  }

  addEffects(body) {
    let header = this.generateHeader();
    return this.http.post(this.baseUrl + '/effects', body, header);
  }

  getAllProducts() {
    return this.http.get(this.baseUrl + '/products');
  }

  getAllIngredients() {
    return this.http.get(this.baseUrl + '/ingredients');
  }

  getAllNotifications() {
    return this.http.get(this.baseUrl + '/notifications');
  }

  getAllEffects() {
    return this.http.get(this.baseUrl + '/effects');
  }

  getNotificationById(id) {
    return this.http.get(this.baseUrl + '/notifications/' + id);
  }

  getProductById(id) {
    return this.http.get(this.baseUrl + '/products/' + id);
  }

  getEffectById(id) {
    return this.http.get(this.baseUrl + '/effects/' + id);
  }

  getIngredientById(id) {
    return this.http.get(this.baseUrl + '/ingredients/' + id);
  }

  getMostReportedEffect() {
    return this.http.get(this.baseUrl + '/effects/most_reported');
  }

  getHeaviestEffect() {
    return this.http.get(this.baseUrl + '/effects/heaviest');
  }

  signup(body) {
    return this.http.post(this.baseUrl + '/user/signup', body);
  }

  signin(body) {
    return this.http.post(this.baseUrl + '/user/login', body);
  }

  getRegionsCode() {
    return this.http.get("https://geo.api.gouv.fr/regions");
  }
}
