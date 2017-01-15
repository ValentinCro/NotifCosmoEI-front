import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service'
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  ingredient : any = {};
  constructor(private http : HttpServiceService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['ingredientId'];
      this.http.getIngredientById(id)
        .map(res => res.json())
        .subscribe(res => {
            this.ingredient = res;
          },
          error => {
            if (error.status == 404) {
              this.router.navigate(['/not-found/', id]);
            }
          });
    });
  }

}
