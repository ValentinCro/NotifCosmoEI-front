import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  advancedSearch: boolean = false;
  criteria: string = "product";

  constructor() { }

  ngOnInit() {
  }

  displayAdvancedSearch () {
    this.advancedSearch = true;
  }

  hideAdvancedSearch () {
    this.advancedSearch = false;
  }
}
