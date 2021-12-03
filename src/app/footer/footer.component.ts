import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container">
        Copyright &copy; {{title}}. All rights reserved
      </div>
    </footer>`,
  styles: [`
    @import '../../styles.scss';
    :host {
      display: block;
      position: sticky;
      top: 100vh;
      color: $white;
      font-size: 0.8em;
      background-color: $dark-color;
      footer {
        padding: 1em 0;
        text-align: right;
      }
    }`]
})
export class FooterComponent {
  @Input() title: string = '';
}
