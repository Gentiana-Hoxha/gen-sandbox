import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpLink } from 'apollo-angular/http';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/cache';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import {mocks, resolvers, typeDefs} from './mocks/mock-server'


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideApollo(() => { //The Apollo is an Angular service exported from apollo-angular to share GraphQL data with your UI.
      const httpLink = inject(HttpLink); //One Link that you already have in your application is called HttpLink which uses HTTP to send your queries.
      return {
        link: httpLink.create({ uri: '/graphql' }), //we connect our client to an external GraphQL Server
        cache: new InMemoryCache(), //we have a place to store data in,
        // schema: addMocksToSchema({
        //   schema: makeExecutableSchema({ typeDefs, resolvers }),
        //   mocks, 
        // }),
      };
    }),
  ],
};

// const { url } = await startStandaloneServer(serverMocked, { listen: { port: 4000 } });

// console.log(`🚀 Server listening at: ${url}`);