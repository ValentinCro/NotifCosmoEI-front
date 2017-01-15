import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : any = {};
  ingredients : any = [];
  constructor(private http : HttpServiceService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['productId'];
      this.http.getProductById(id)
        .map(res => res.json())
        .subscribe(res => {
          this.product = res;
          for (let ingredientId of this.product.ingredients) {
            this.http.getIngredientById(ingredientId)
              .map(res => res.json())
              .subscribe(res => {
                this.ingredients.push(res);
              });
          }
        },
          error => {
            if (error.status == 404) {
              this.router.navigate(['/not-found/', id]);
            }
          });
    });
  }

}
