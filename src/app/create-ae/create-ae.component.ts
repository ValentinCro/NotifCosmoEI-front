import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { HttpServiceService } from '../http-service.service'

@Component({
  selector: 'app-create-ae',
  templateUrl: './create-ae.component.html',
  styleUrls: ['./create-ae.component.css']
})
export class CreateAEComponent implements OnInit {
  productName : string = "";
  ingredients: Array<{ingredientName: string, idIngredient: number}> = [];
  symptomes : Array<{symptomeName: string, idSymptome: number}> = [];
  loadProducts : boolean = false;
  loadIngredients : boolean = false;
  loadSymptomes : boolean = false;
  dataProducts : any = [];
  dataIngredients : any = [];
  dataSymptomes: any = [];
  ingredientID: number = 0;
  symptomeID: number = 0;

  constructor(private http: HttpServiceService) { }

  ngOnInit() {

  }

  getProducts() {
    this.loadProducts = true;
    this.loadIngredients = true;
    this.loadSymptomes = true;
  }

  addIngredient() {
    let ingredient = {ingredientName: "", idIngredient: this.ingredientID};
    this.ingredients.push(ingredient);
    this.ingredientID++;
  }

  removeIngredient(ingredient) {
    let tmp = this.ingredients;
    this.ingredients = [];
    for(let item of tmp) {
      if (ingredient.idIngredient != item.idIngredient) {
        this.ingredients.push(item);
      }
    }
  }

  addSymptome() {
    let symptome = {symptomeName: "", idSymptome: this.symptomeID};
    this.symptomes.push(symptome);
    this.symptomeID++;
  }

  removeSymptome(symptome) {
    let tmp = this.symptomes;
    this.symptomes = [];
    for(let item of tmp) {
      if (symptome.idSymptome != item.idSymptome) {
        this.symptomes.push(item);
      }
    }
  }

  save() {
    let ingredientsToSave = [];
    for (let ingredient of this.ingredients) {
      ingredientsToSave.push(ingredient.ingredientName);
    }
    let idIngredients = [];

    for (let ingredient of ingredientsToSave) {
      let data = {
        "name": ingredient
      };
      this.http.addIngredients(data)
      // extract json body
        .map(res => res.json())
        .subscribe(res => {
          console.log(res);
          idIngredients.push();
        });
    }
  }
}
