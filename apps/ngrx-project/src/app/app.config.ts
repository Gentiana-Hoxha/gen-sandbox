import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {booksReducer, collectionReducer, counterReducer} from '@gen-sandbox/project-lib';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore({ count: counterReducer , books: booksReducer, collection: collectionReducer }),
  ],
};


// OR if it's in AppModule:
// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}