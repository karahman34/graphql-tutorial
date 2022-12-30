import { gql, useQuery } from '@apollo/client'
import { IGetAllCharacterResponse } from '../../../data/response/character/getAllCharactersResponse'

export const GET_ALL_CHARACTER = gql`
  query Characters($filter: FilterCharacter) {
    characters(filter: $filter) {
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

interface IFilterCharacter {
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
}

export const useGetAllCharactersQuery = (params?: IFilterCharacter) => {
  let characters: IGetAllCharacterResponse | undefined

  const { error, loading, data, refetch } = useQuery(GET_ALL_CHARACTER, {
    variables: {
      filter: params,
    },
  })

  if (!error && data) characters = data

  return { error, loading, data: characters, refetch }
}
