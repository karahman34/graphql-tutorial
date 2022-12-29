interface ICharactersResultsItem {
  id: string
  name: string
  status: string
  species: string
  gender: string
  image: string
  created: string
}

interface ICharactersResults {
  results: Array<ICharactersResultsItem>
}

export interface IGetAllCharacter {
  characters: ICharactersResults
}
