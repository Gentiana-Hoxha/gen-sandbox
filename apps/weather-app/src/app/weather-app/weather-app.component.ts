import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})
export class WeatherAppComponent implements OnInit {
  cities: any[] | undefined;

  loading = true;
  error: any;
 
  private querySubscription: Subscription | undefined; //it contains many useful methods (like refetch()) to manipulate the watched query.
  private queryObervable: Observable<ApolloQueryResult<any>> | undefined; //A normal Observable, has only one method, subscribe().
  public queryCityWeather$: Observable<any> | undefined; 

  constructor(private readonly apollo: Apollo) {}

  ngOnInit() {
    // can emit multiple results
    this.querySubscription = this.apollo
      .watchQuery({
        query: GET_CITIES,
      })
      .valueChanges.subscribe((result: any) => { //QueryRef - To subscribe to query results, you have to access its valueChanges
        this.cities = result.data?.cities;
        this.loading = result.loading;
        this.error = result.error;
      });

      // The below runs the query only once:
    this.queryObervable = this.apollo
      .query({
        query: GET_CITIES,
      })
    
    
    this.queryCityWeather$ = this.apollo
      .watchQuery({
        query: GET_CITY_WEATHER,
        variables: {
          city: 'Pristina',
        },
      })
      .valueChanges.pipe(
        map(result => result.data)
      );
  }
}


  const GET_CITIES = gql`
  {
    getCities(state: "Kosova") {
      name
    }
  }
`

const GET_CITY_WEATHER = gql`
  query getCityWeather($city: String) {
    postsOf(city: $city) {
    temperature
    wind
    }
  }
`;
