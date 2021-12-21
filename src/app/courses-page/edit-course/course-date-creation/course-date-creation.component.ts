import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-date-creation',
  templateUrl: './course-date-creation.component.html',
  styleUrls: ['./course-date-creation.component.scss'],
})
export class CourseDateCreationComponent implements OnChanges {
  public dateToString: string;
  @Input() creationDate: string;
  @Output() creationDateChanged = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['creationDate'].firstChange) {
      this.creationDate = this._dateToString(new Date().toString());
    } else {
      this.creationDate = this._dateToString(this.creationDate);
    }
  }

  onChange(creationDate: string): void {
    this.creationDateChanged.emit(new Date(creationDate).toString());
  }

  private _dateToString(dateString: string): string {
    let date = new Date(dateString);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

}
