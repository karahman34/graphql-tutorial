import { ICharacterStatus } from '../../enums/characterStatusEnum'

interface IGetCharacterDetailEpisode {
  id: string
  name: string
  air_date: string
  episode: string
  created: string
}

interface IGetCharacterDetail {
  id: string
  name: string
  status: ICharacterStatus
  species: string
  gender: string
  image: string
  created: string
  episode: Array<IGetCharacterDetailEpisode>
}

export interface IGetCharacterDetailResponse {
  character: IGetCharacterDetail
}
