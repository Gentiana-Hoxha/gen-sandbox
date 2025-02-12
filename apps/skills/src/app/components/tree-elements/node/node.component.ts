import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'node',
  imports: [CommonModule],
  templateUrl: './node.component.html',
  styles: [`
    .child-wrapper {
      border: 1px solid red;
      padding: 10px;
    }
  `]
})
export class NodeComponent {}
