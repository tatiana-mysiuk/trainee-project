import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchRequest: string = '';

  @Output() courseFilter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    return;
  }

  onSearch() {
    const filterKey = this.searchRequest;
    this.courseFilter.emit(filterKey);
  }
}
