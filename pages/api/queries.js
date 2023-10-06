// queries.js
import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;
export const GetCharacterDetails = gql`
  query GetCharacters($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      gender
      image
      origin {
        name
        dimension
      }
      location {
        name
        dimension
      }
      episode {
        id
        name
        air_date
      }
    }
  }
`;

