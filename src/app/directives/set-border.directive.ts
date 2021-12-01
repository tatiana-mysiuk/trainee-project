import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBorder]'
})
export class SetBorderDirective {
  borderColor = 'transparent';
  freshCourseColor = 'green';
  upcomingCourseColor = 'blue';

  constructor(
    private _element: ElementRef,
    private _render: Renderer2) {}

  @Input() set appSetBorder(creationDate: Date) {
    let currentDate = new Date();
    let isFresh = this.isFreshCourse(14, currentDate, creationDate);

    if ( creationDate < currentDate && isFresh ) {
      this.borderColor = this.freshCourseColor;
    }  else if ( creationDate > currentDate) {
      this.borderColor = this.upcomingCourseColor;
    }

    this._render.setStyle(this._element.nativeElement, 'borderColor', this.borderColor);
  };

  private isFreshCourse(days: number, currentDate: any, creationDate: any ): boolean {
    let msPerDay = 1000 * 60 *60 * 24;
    return (currentDate - creationDate) / msPerDay <= days;
  }
}
