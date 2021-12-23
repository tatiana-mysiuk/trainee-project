import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSetBorder]'
})
export class SetBorderDirective implements OnChanges {
  private borderColor: string = 'transparent';
  private freshCourseColor: string = 'green';
  private upcomingCourseColor: string = 'blue';

  @Input('appSetBorder') creationDate: Date;

  constructor(private _element: ElementRef) {
    _element.nativeElement.style.customProperty = true;
  }

  ngOnChanges(): void {
    let currentDate: number = Date.now();
    let creationDate: number = this.creationDate.getTime();
    let isFresh: boolean = this.isFreshCourse(14, currentDate, creationDate);

    if ( creationDate <= currentDate && isFresh ) {
      this.borderColor = this.freshCourseColor;
    }  else if ( creationDate > currentDate) {
      this.borderColor = this.upcomingCourseColor;
    }

    this._element.nativeElement.style.borderColor = this.borderColor;
  }

  private isFreshCourse(days: number, currentDate: number, creationDate: number ): boolean {
    let msPerDay = 1000 * 60 *60 * 24;
    return (currentDate - creationDate) / msPerDay <= days;
  }
}
