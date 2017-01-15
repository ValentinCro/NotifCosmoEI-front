import { Component, OnInit } from '@angular/core'
import { HttpServiceService } from '../http-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostReportedEffects : any = [];
  heaviestEffects : any = [];
  constructor(private http: HttpServiceService) {
    this.getMostReportedEffects();
    this.getHeaviestEffects();
  }

  getMostReportedEffects () {
    this.http.getMostReportedEffect()
      .map(res => res.json())
      .subscribe(res => {
        console.log(res);
        this.mostReportedEffects = res;
      });
  }

  getHeaviestEffects () {
    this.http.getHeaviestEffect()
      .map(res => res.json())
      .subscribe(res => {
        console.log(res);
        this.heaviestEffects = res;
      });
  }

  ngOnInit() {
  }

}
