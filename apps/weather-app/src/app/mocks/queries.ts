import { gql } from "apollo-angular";

export const GET_CITIES = gql`
{
  getCities(state: "Kosova") {
    name
  }
}
`

export const GET_CITY_WEATHER = gql`
query getCityWeather($city: String) {
  postsOf(city: $city) {
  temperature
  wind
  }
}
`;

export const GET_ROCKET_DETAILS = gql`
query RocketDetails(rocketId: 1) {
  rocket() {
    description @client
  }
}
`;

export const GET_DOG_QUERY = gql`
  query getDog($name: String) {
    dog(name: $name) {
      id
      name
      breed
    }
  }
`;