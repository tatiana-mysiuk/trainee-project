import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { debounceTime, fromEvent, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnDestroy {

  @Output() courseFilter = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput: ElementRef;

  private searchSub: Subscription;

  ngAfterViewInit(): void {
    const keyupEvent$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(400),
        map(event => {
          return event.target.value;
        })
      );
    this.searchSub = keyupEvent$.subscribe({
      next: (searchRequest: string) => {
        if (searchRequest.length >= 3) {
          this.courseFilter.emit(searchRequest.trim());
        }
      }
    });
  }

  onReset() {
    this.searchInput.nativeElement.value = '';
    this.courseFilter.emit('');
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
}
