import { Component, OnInit } from '@angular/core'
import { HttpServiceService } from '../http-service.service'
import { TranslateLevelService } from '../translate-level.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostReportedEffects : any = [];
  heaviestEffects : any = [];
  constructor(private http: HttpServiceService, private translate : TranslateLevelService) {
    this.getMostReportedEffects();
    this.getHeaviestEffects();
  }

  getMostReportedEffects () {
    this.http.getMostReportedEffect()
      .map(res => res.json())
      .subscribe(res => {
        for (let effect of res) {
          effect.level = this.translate.translateLevel(effect.level);
          this.mostReportedEffects.push(effect);
        }
      });
  }

  getHeaviestEffects () {
    this.http.getHeaviestEffect()
      .map(res => res.json())
      .subscribe(res => {
        for (let effect of res) {
          effect.level = this.translate.translateLevel(effect.level);
          this.heaviestEffects.push(effect);
        }
      });
  }

  ngOnInit() {
  }

}
