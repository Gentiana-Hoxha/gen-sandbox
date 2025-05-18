import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '@gen-sandbox/project-lib';

@Component({
  selector: 'app-counter-app',
  imports: [CommonModule],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css',
})
export class CounterAppComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
