import { gql } from "apollo-angular";

const baseTypeDefs = gql`
  type Rocket {
    id: ID!
    name: String!
  }
`;

export const typeDefs = gql`
    type Rocket {
        description: String!
  }
`;

// extend type City {
//     name: String!
//     }

//     extend type Cities {
//         cities: City[]!
//     }

//     extend type Weather {
//         temperature: String!
//         windSpeed: String!
//     }
 
export const resolvers = {
    Rocket: {
        description: () => {
            return 'A boilerplate standard space rocket';
          },
    },
    // Weather: {
    //     weather: () => [],
    // },
    // Cities: {
    //     cities: () => [],
    // },
};
