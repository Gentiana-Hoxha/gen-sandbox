import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'visualiser',
  imports: [CommonModule],
  templateUrl: './visualiser.component.html',
  styles: [`
    .child-wrapper {
      border: 1px solid #ccc;
      padding: 10px;
      width: 400px;
      margin: 20px;
    }
  `]
})
export class VisualiserComponent {}
