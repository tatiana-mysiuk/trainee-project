import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss']
})
export class CourseDurationComponent {

  @Input() duration: number;
  @Output() durationChanged = new EventEmitter<number>();

  constructor() { }

  onChange(duration: number): void {
    this.durationChanged.emit(duration);
  }
}
