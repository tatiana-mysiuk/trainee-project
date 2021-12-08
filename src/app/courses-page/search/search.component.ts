import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchRequest: string = '';

  @Output() courseFilter = new EventEmitter<string>();

  onSearch(): void {
    const filterKey = this.searchRequest.trim();
    if (filterKey != '') {
      this.courseFilter.emit(filterKey);
    }
  }

  onSearchRequestCnange() {
    this.courseFilter.emit(this.searchRequest.trim());
  }
}
