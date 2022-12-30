import { useParams, useNavigate } from 'react-router-dom'
import { FaSpinner, FaArrowLeft } from 'react-icons/fa'
import { useGetCharacterDetailQuery } from '../../graphql/queries/character/useGetCharacterDetailQuery'
import { IGetCharacterDetailResponse } from '../../data/response/character/getCharacterDetailResponse'

function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'bg-green-500'
    case 'dead':
      return 'bg-red-500'
    default:
      return 'bg-gray-500'
  }
}

const buildDetail = (characterDetail?: IGetCharacterDetailResponse) => {
  return (
    <div>
      <div className='font-bold text-4xl mb-3'>
        {characterDetail?.character.name}
      </div>

      <div className='flex flex-wrap gap-2'>
        <div className='text-sm py-1 px-2 bg-green-500 rounded-xl text-white w-max'>
          {characterDetail?.character.species}
        </div>

        <div
          className={`text-sm py-1 px-2 rounded-xl text-white w-max ${
            characterDetail?.character.gender.toLowerCase() === 'male'
              ? 'bg-blue-500'
              : 'bg-pink-500'
          }`}
        >
          {characterDetail?.character.gender}
        </div>

        <div
          className={`text-sm font-medium py-1 px-2 rounded-xl text-white w-max ${getStatusColor(
            characterDetail?.character.status ?? ''
          )}`}
        >
          {characterDetail?.character.status}
        </div>
      </div>
    </div>
  )
}

const buildEpisodes = (characterDetail?: IGetCharacterDetailResponse) => {
  return (
    <div className='flex flex-col gap-4'>
      {characterDetail?.character.episode.map((episode) => (
        <div
          key={episode.id}
          className='bg-white rounded-md px-2 py-2 text-black'
        >
          <div className='mb-1 text-sm text-gray-500 font-medium'>
            {episode.air_date}
          </div>

          <div className='text-sm'>
            {episode.episode}
            <span className='w-3 text-center inline-block'>-</span>
            {episode.name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CharacterDetail() {
  const { characterId } = useParams()
  const navigate = useNavigate()

  const {
    error,
    loading,
    data: characterDetail,
  } = useGetCharacterDetailQuery(characterId ?? '')

  if (loading)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <FaSpinner className='animate-spin text-white text-3xl' />
      </div>
    )
  if (error) return <p>Oops, Something went wrong..</p>

  return (
    <div className='pt-6 py-12 w-[800px] mx-auto'>
      <button
        className='w-max flex items-center gap-2 mb-6'
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className='text-white text-2xl' />
        <div>Go Back</div>
      </button>

      <div className='grid grid-cols-2 gap-4'>
        <img
          className='rounded-md object-cover'
          src={characterDetail?.character.image}
          alt={characterDetail?.character.name}
          width={350}
          height={350}
        />

        <div>
          {buildDetail(characterDetail)}
          <div className='h-6'></div>
          {buildEpisodes(characterDetail)}
        </div>
      </div>
    </div>
  )
}
