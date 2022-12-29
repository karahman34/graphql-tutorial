import { gql } from '@apollo/client'

export const GET_ALL_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
        created
      }
    }
  }
`
