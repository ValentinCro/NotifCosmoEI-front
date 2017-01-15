import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HttpServiceService } from '../http-service.service'

@Component({
  selector: 'app-notifification',
  templateUrl: './notifification.component.html',
  styleUrls: ['./notifification.component.css']
})
export class NotifificationComponent implements OnInit {
  notification : any = {};
  products : any = [];
  effects : any = [];
  constructor(private http: HttpServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['notifId'];
      this.http.getNotificationById(id)
        .map(res => res.json())
        .subscribe(res => {
          this.notification = res;
          for (let product of this.notification.products) {
            this.http.getProductById(product)
              .map(res => res.json())
              .subscribe(res => {
                this.products.push(res);
              });
          }
          for (let effect of this.notification.effects) {
            this.http.getEffectById(effect)
              .map(res => res.json())
              .subscribe(res => {
                this.effects.push(res);
              });
          }
        });
    });
  }

}
