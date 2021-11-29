import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchRequest: string = '';

  constructor() { }

  ngOnInit() {
    return;
  }

  onSearch() {
    console.log(this.searchRequest);
  }

}
