import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-date-creation',
  templateUrl: './course-date-creation.component.html',
  styleUrls: ['./course-date-creation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDateCreationComponent implements OnInit {
  public dateToString: string;
  @Input() creationDate: Date;
  @Output() creationDateChanged = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
    this.dateToString = this._dateToString(this.creationDate);
  }

  onChange(creationDate: string): void {
    this.creationDateChanged.emit(new Date(creationDate));
  }

  private _dateToString(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

}
