import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="container logo-container">
      <a routerLink="courses" class="router-link">
        <div class="icon-wrapper">
          <mat-icon aria-hidden="false" aria-label="Logo">play_circle_outline</mat-icon>
        </div>

        <span>{{ title }}</span>
      </a>
    </div>`,
  styles: [`
    .logo-container {
      mat-icon {
        vertical-align: middle;
        width: 30px;
        height: 30px;
        font-size: 30px;
      }
      .icon-wrapper {
        display: inline-block;
        background-image: linear-gradient(45deg, #3f51b5 25%, #4caf50 100%);
        background-image: -webkit-linear-gradient(45deg, #3f51b5 25%, #4caf50 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      span {
        padding-left: 0.5em;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  `]
})
export class LogoComponent {
  title = 'Video course';
}
