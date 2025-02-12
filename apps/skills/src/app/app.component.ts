import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditTreeComponent } from './components/trees/edit-tree/edit-tree.component';

@Component({
  imports: [EditTreeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skills';
}
