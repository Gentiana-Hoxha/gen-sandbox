import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'edge',
  imports: [CommonModule],
  templateUrl: './edge.component.html',
  styles: [`
    button {
      border: 1px solid blue;
    }
  `]
})
export class EdgeComponent {}
