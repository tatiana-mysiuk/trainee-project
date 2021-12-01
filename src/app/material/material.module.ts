import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
