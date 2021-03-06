import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import {Observable} from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-create-ae',
  templateUrl: './create-ae.component.html',
  styleUrls: ['./create-ae.component.css']
})
export class CreateAEComponent implements OnInit {
  searchString : string = "";
  searchIngredient : string = "";
  searchEffectString : string = "";
  ingredients: Array<{name : string, id: number}> = [];
  products: Array<{name: string, id: number, ingredients : Array<{id: number}>}> = [];
  effects : any = [];
  dataProducts : any = [];
  dataEffects : any = [];
  dataIngredients : any = [];
  infoProduct : any = {};
  regionsCode : any = [];
  code : string = "01";
  newNotif : boolean = true;
  createProductShow : boolean = false;
  createEffectShow : boolean = false;
  ProductInfoShow : boolean = false;


  constructor(private http: HttpServiceService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['notifId'];
      if (id != undefined) {
        this.newNotif = false;
        this.http.getNotificationById(id)
          .map(res => res.json())
          .subscribe(res => {

            for (let product of res.products) {
              this.http.getProductById(product)
                .map(res => res.json())
                .subscribe(res => {
                  this.products.push(res);
                });
            }
            for (let effect of res.effects) {
              this.http.getEffectById(effect)
                .map(res => res.json())
                .subscribe(res => {
                  this.effects.push(res);
                });
            }
            this.code = res.code;
          });
      }
    });
  }

  ngOnInit() {
    this.http.getRegionsCode()
      .map(res => res.json())
      .subscribe(res => {
        this.regionsCode = res;
      });
  }

  setInfoProduct(product) {
    this.infoProduct.name = product.name;
    let tabIngredient = [];

    for (let ingredientId of product.ingredients) {
      this.http.getIngredientById(ingredientId)
        .map(res => res.json())
        .subscribe(res => {
            tabIngredient.push(res);
        })
    }

    this.infoProduct.ingredients = tabIngredient;
    this.toggleInfoProduct();
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

  searchProducts() {
    this.http.searchProducts(this.searchString)
    // extract json body
      .map(res => res.json())
      .subscribe(res => {
        this.dataProducts = [];
        for (let product of res) {
          let find = false;
          for (let addedProduct of this.products) {
            if (product.name == addedProduct.name) {
              find = true;
            }
          }
          if (!find) {
            this.dataProducts.push(product);
          }
        }
      });

  }

  addProduct() {

    let idIngredients = [];
    for (let ingredient of this.ingredients) {
      idIngredients.push(ingredient.id);
    }

    let bodyData = {
      name : this.searchString,
      ingredients : idIngredients
    };

    this.searchString = "";
    this.dataProducts = [];

    this.http.addProducts(bodyData)
    // extract json body
      .map(res => res.json())
      .subscribe(res => {
        this.products.push(res);
        this.toggleCreateProduct();
      });
  }

  removeProduct(product) {
    let tmp = this.products;
    this.products = [];
    for (let tmpProduct of tmp) {
      if (tmpProduct.name != product.name) {
        this.products.push(tmpProduct);
      }
    }

    if (this.searchString.length > 0) {
      this.searchProducts();
    }
  }

  addExistingProduct(product) {
    this.searchString = "";
    this.dataProducts = [];
    this.products.push(product);
  }

  searchEffects() {
    this.dataEffects = [];
    this.http.searchEffects(this.searchEffectString)
      .map(res => res.json())
      .subscribe(res => {
        for (let effect of res) {
          let find = false;
          for (let effectAdded of this.effects) {
            if (effect.id == effectAdded.id) {
              find = true;
            }
          }
          if (!find) {
            this.dataEffects.push(effect);
          }
        }
      });
  }

  addExistingEffect(effect) {
    this.searchEffectString = "";
    this.dataEffects = [];
    this.effects.push(effect);
  }

  addEffect() {
    let dataBody = {
      description: this.searchEffectString
    };
    this.http.addEffects(dataBody)
      .map(res=> res.json())
      .subscribe(res => {
        this.searchEffectString = "";
        this.effects.push(res);
        this.toggleCreateEffect();
      });
  }

  saveNotif() {
    let effectsId = [];
    for (let effect of this.effects) {
      effectsId.push(effect.id);
    }

    let productsId = []
    for (let product of this.products) {
      productsId.push(product.id);
    }

    let bodyData = {
      effects : effectsId,
      products : productsId,
      code : this.code
    };
    if (this.newNotif) {
      this.http.addNotifications(bodyData)
        .map(res => res.json())
        .subscribe(res => {
          this.router.navigate(['/notification', res.id]);
        });
    } else {
      this.http.updateNotification(bodyData)
        .map(res => res.json())
        .subscribe(res => {
          this.router.navigate(['/notification', res.id]);
        });
    }
  }

  removeEffect(effect) {
    let tmp = this.effects;
    this.effects = [];
    for (let tmpEffect of tmp) {
      if (effect.id != tmpEffect.id) {
        this.effects.push(tmpEffect);
      }
    }
    if (this.searchEffectString.length > 0) {
      this.searchEffects();
    }
  }

  toggleCreateProduct() {
    this.createProductShow = !this.createProductShow;
  }

  toggleCreateEffect() {
    this.createEffectShow = !this.createEffectShow;
  }

  toggleInfoProduct() {
    this.ProductInfoShow = !this.ProductInfoShow;
  }
}
