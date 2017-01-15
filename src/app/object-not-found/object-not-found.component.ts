import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-object-not-found',
  templateUrl: './object-not-found.component.html',
  styleUrls: ['./object-not-found.component.css']
})
export class ObjectNotFoundComponent implements OnInit {
  id : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['objectId'];
    });
  }

}
