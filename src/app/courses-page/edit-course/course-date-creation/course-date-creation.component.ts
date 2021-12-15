import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-date-creation',
  templateUrl: './course-date-creation.component.html',
  styleUrls: ['./course-date-creation.component.scss']
})
export class CourseDateCreationComponent implements OnInit {

  @Input() creationDate: Date;

  constructor() { }

  ngOnInit(): void {
    console.log(this.creationDate)
  }

}
