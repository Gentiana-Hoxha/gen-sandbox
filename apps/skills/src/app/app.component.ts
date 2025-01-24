import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentNgContentComponent } from './components/parent-ng-content/parent-ng-content.component';

@Component({
  imports: [ParentNgContentComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skills';
}
