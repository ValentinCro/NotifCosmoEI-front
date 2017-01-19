import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { TranslateLevelService } from '../translate-level.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products : any = [];
  effects : any = [];
  ingredients : any = [];
  criteria: string = "product";
  searchString : string = "";
  page : number;

  constructor(private http : HttpServiceService, private translate : TranslateLevelService) { }

  ngOnInit() {
    this.http.getAllProducts()

      .subscribe(res => {
        this.products = res.json();
      });
    this.http.getAllEffects()

      .subscribe(res => {
        for (let effect of res.json()) {
          effect.level = this.translate.translateLevel(effect.level);
          this.effects.push(effect);
        }
      });
    this.http.getAllIngredients()

      .subscribe(res => {
        this.ingredients = res.json();
      });
  }

  search() {
    if (this.criteria == "product") {
      this.searchProduct();
    } else if (this.criteria == "ingredient") {
      this.searchIngredient();
    } else if (this.criteria == "effect") {
      this.searchEffect();
    }
  }

  searchProduct() {
    this.http.searchProducts(this.searchString)
      .map(res => res.json())
      .subscribe(res => {
        this.products = res;
      });
  }

  searchIngredient() {
    this.http.searchIngredients(this.searchString)
      .map(res => res.json())
      .subscribe(res => {
        this.ingredients = res;
      });
  }

  searchEffect() {
    this.http.searchEffects(this.searchString)
      .map(res => res.json())
      .subscribe(res => {
        for (let effect of res) {
          effect.level = this.translate.translateLevel(effect.level);
          this.effects.push(effect);
        }
      });
  }
}
