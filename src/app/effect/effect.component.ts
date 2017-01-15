import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service'
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.css']
})
export class EffectComponent implements OnInit {

  constructor(private http : HttpServiceService,  private route: ActivatedRoute, private router: Router) { }
  effect : any = {};
  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['effectId'];
      this.http.getEffectById(id)
        .map(res => res.json())
        .subscribe(res => {
          this.effect = res;
        },
        error => {
          if (error.status == 404) {
            this.router.navigate(['/not-found/', id]);
          }
        });
    });
  }

}
