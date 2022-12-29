import { IGetAllCharacter } from '../../data/character/characterData'

interface IProps {
  characters: IGetAllCharacter
}

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

export default function ListCharacter(props: IProps) {
  const { characters } = props

  return (
    <div className='grid grid-cols-2 gap-4'>
      {characters.characters.results.map((character) => (
        <div
          key={character.id}
          className='bg-white rounded-md text-gray-900 flex'
        >
          <img
            src={character.image}
            alt={character.name}
            className='object-cover rounded-md rounded-r-none'
            height={100}
            width={100}
          />

          <div className='px-3 py-2'>
            <div className='text-green-500 font-bold mb-1'>
              {character.name}
            </div>

            <div className='flex flex-wrap gap-1'>
              <div className='text-xs py-1 px-2 bg-green-500 rounded-xl text-white w-max'>
                {character.species}
              </div>

              <div
                className={`text-xs font-medium py-1 px-2 rounded-xl text-white w-max ${getStatusColor(
                  character.status
                )}`}
              >
                {character.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
