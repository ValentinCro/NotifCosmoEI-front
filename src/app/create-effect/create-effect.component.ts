import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-create-effect',
  templateUrl: './create-effect.component.html',
  styleUrls: ['./create-effect.component.css']
})
export class CreateEffectComponent implements OnInit {
  searchEffectString : string = "";
  alreadyExist : boolean = false;
  constructor(private http: HttpServiceService, private router : Router) { }

  ngOnInit() {
  }


  addEffect() {
    let dataBody = {
      description: this.searchEffectString
    };
    this.http.addEffects(dataBody)
      .map(res=> res.json())
      .subscribe(res => {
        this.router.navigate(['/effect', res.id]);
      },
        error => {
          if (error.status == 403) {
            this.alreadyExist = true;
          }
        });
  }
}
