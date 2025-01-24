import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildNgContentComponent } from '../child-ng-content/child-ng-content.component';

@Component({
  selector: 'app-parent-ng-content',
  imports: [CommonModule, ChildNgContentComponent],
  templateUrl: './parent-ng-content.component.html',
  styleUrl: './parent-ng-content.component.css',
})
export class ParentNgContentComponent {}
