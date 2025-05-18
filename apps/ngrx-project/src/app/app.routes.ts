import { Route } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { BookAppComponent } from './book-app/book-app.component';

export const appRoutes: Route[] = [
    { path: 'counter-app', component: CounterAppComponent },
    { path: 'book-app', component: BookAppComponent}
];
