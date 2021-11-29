import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="container logo-container">
      <mat-icon aria-hidden="false" aria-label="LOgo">play_circle_outline</mat-icon>
      <span>{{ title }}</span>
    </div>`,
  styles: [`
    .logo-container {
      mat-icon {
        vertical-align: middle;
      }
      span {
        padding-left: 0.5em;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  `]
})
export class LogoComponent implements OnInit {
  title = 'Video course';

  constructor() { }

  ngOnInit() {
    return;
  }
}
