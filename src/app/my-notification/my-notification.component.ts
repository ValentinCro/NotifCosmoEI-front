import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-my-notification',
  templateUrl: './my-notification.component.html',
  styleUrls: ['./my-notification.component.css']
})
export class MyNotificationComponent implements OnInit {
  notifications : Array<{id : number, products : any, effects: any}> = [];
  constructor(private http: HttpServiceService) { }

  ngOnInit() {
    this.http.getMyNotifications()
      .map(res => res.json())
      .subscribe(res => {
        for (let notification of res) {
          let products = [];
          let effects = [];
          for (let product of notification.products) {
            this.http.getProductById(product)
              .map(res => res.json())
              .subscribe(res => {
                products.push(res);
              });
          }
          for (let effect of notification.effects) {
            this.http.getEffectById(effect)
              .map(res => res.json())
              .subscribe(res => {
                effects.push(res);
              });
          }
          let item = {id : notification.id, products : products, effects : effects };
          this.notifications.push(item);
        }
      });
  }

}
