import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent implements OnInit {
  name : string = "";
  alreadyExist : boolean = false;
  constructor(private http: HttpServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }



  addIngredient() {
    let find = false;
    let data = {name : this.name};
    this.http.addIngredients(data)
      .map(res => res.json())
      .subscribe(res => {
        this.router.navigate(['/ingredient', res.id]);
      },
      error => {
        if (error.status == 403) {
          this.alreadyExist = true;
        }
      });
  }
}
