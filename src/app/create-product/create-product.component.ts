import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  name : string = "";
  dataIngredients : any = [];
  searchIngredient : string = "";
  ingredients: Array<{name : string, id: number}> = [];
  products: Array<{name: string, id: number, ingredients : Array<{id: number}>}> = [];
  alreadyExist : boolean = false;
  constructor(private http : HttpServiceService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addIngredient() {
    let find = false;
    let data = {name : this.searchIngredient};
    this.searchIngredient = "";
    this.http.searchIngredients(this.searchIngredient)
      .map(res => res.json())
      .subscribe(res => {
        if (res.length > 0) {
          for (let ing of res) {
            if (ing.name == data.name) {
              find = true;
              this.ingredients.push(ing);
            }
          }

        }
        if (!find) {
          this.http.addIngredients(data)
            .map(res => res.json())
            .subscribe(res => {
              this.ingredients.push(res);
            });
        }
      });
  }

  addExistingIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.searchIngredient = "";
    this.dataIngredients = [];
  }

  removeIngredient(ingredient) {
    let tmp = this.ingredients;
    this.ingredients = [];
    for (let tmpIngredient of tmp) {
      if (ingredient.name != tmpIngredient.name) {
        this.ingredients.push(tmpIngredient);
      }
    }
  }

  searchIngredients() {
    this.dataIngredients = [];
    if (this.searchIngredient.length > 0 && this.searchIngredient != " ") {
      this.http.searchIngredients(this.searchIngredient)
        .map(res => res.json())
        .subscribe(res => {
          for (let ingredient of res) {
            let find = false;
            for (let addedIngredient of this.ingredients) {
              if (ingredient.name == addedIngredient.name) {
                find = true;
              }
            }
            if (!find) {
              this.dataIngredients.push(ingredient);
            }
          }
        });
    }
  }

  addProduct() {

    let idIngredients = [];
    for (let ingredient of this.ingredients) {
      idIngredients.push(ingredient.id);
    }

    let bodyData = {
      name : this.name,
      ingredients : idIngredients
    };

    this.http.addProducts(bodyData)
    // extract json body
      .map(res => res.json())
      .subscribe(res => {
        this.router.navigate(['/product', res.id]);
      },
        error => {
          if (error.status == 403) {
            this.alreadyExist = true;
          }
        });
  }

}
