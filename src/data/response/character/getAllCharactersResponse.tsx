import { ICharacterStatus } from '../../enums/characterStatusEnum'

interface ICharactersResultsItem {
  id: string
  name: string
  status: ICharacterStatus
  species: string
  gender: string
  image: string
  created: string
}

interface ICharactersResults {
  results: Array<ICharactersResultsItem>
}

export interface IGetAllCharacterResponse {
  characters: ICharactersResults
}
