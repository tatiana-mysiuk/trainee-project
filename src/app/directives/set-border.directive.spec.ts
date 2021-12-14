import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SetBorderDirective } from './set-border.directive';

@Component({
  template: `
  <div appSetBorder="freshDate"></div>
  <div appSetBorder="futureDate"></div>
  <div appSetBorder="testDate"></div>
  <div></div>`
})
class TestComponent {
  currentDate: number = Date.now();
  freshDate: Date = new Date(this.currentDate + 14 * 24 * 60 * 60 * 1000);
  futureDate: Date = new Date(this.currentDate - 14 * 24 * 60 * 60 * 1000);
  testDate: Date = new Date(this.currentDate + 20  * 24 * 60 * 60 * 1000);
}

describe('SetBorderDirective', () => {
  let elemWdir: any;
  let divWOdir: any;

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [
        SetBorderDirective,
        TestComponent
      ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();

    elemWdir = fixture.debugElement.queryAll(By.directive(SetBorderDirective));
    divWOdir = fixture.debugElement.query(By.css('div:not([appSetBorder])'));
  });

  it('should have three elements with set-border directive', () => {
    expect(elemWdir.length).toBe(3);
  });

  it('should be "green" border color of 1st <div>', () => {
    const brColor = elemWdir[0].nativeElement.style.borderColor;
    expect(brColor).toBe('green');
  });

  it('should be "blue" border color of 2nd <div>', () => {
    const brColor = elemWdir[1].nativeElement.style.borderColor;
    expect(brColor).toBe('blue');
  });

  it('should be default border color of 3rd <div>', () => {
    const brColor = elemWdir[2].nativeElement.style.borderColor;
    expect(brColor).toBe('transparent');
    //const dir = elemWdir[2].injector.get(SetBorderDirective) as SetBorderDirective;
    //const brColor = elemWdir[2].nativeElement.style.borderColor;
    //expect(brColor).toBe(dir.borderColor);
  });

  it('<div> without  directive should not have a customProperty', () => {
    expect(divWOdir.properties['customProperty']).toBeUndefined();
  });
});
