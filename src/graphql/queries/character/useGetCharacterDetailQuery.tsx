import { gql, useQuery } from '@apollo/client'
import { IGetCharacterDetailResponse } from '../../../data/response/character/getCharacterDetailResponse'

export const GET_CHARACTER_DETAIL = gql`
  query GetCharacterDetail($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      created
      episode {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`

export const useGetCharacterDetailQuery = (id: string) => {
  let characterDetail: IGetCharacterDetailResponse | undefined

  const { error, loading, data } = useQuery(GET_CHARACTER_DETAIL, {
    variables: {
      id,
    },
  })
  if (!error && data) characterDetail = data

  return { error, loading, data: characterDetail }
}
