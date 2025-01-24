import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-ng-content',
  imports: [CommonModule],
  templateUrl: './child-ng-content.component.html',
  styles: [`
    .child-wrapper {
      border: 1px solid #ccc;
      padding: 10px;
    }
  `]
})
export class ChildNgContentComponent {}
