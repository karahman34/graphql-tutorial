import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_CHARACTER } from '../../graphql/queries/characterQuery'
import { FaSpinner } from 'react-icons/fa'
import ListCharacter from '../../components/character/ListCharacter'
import { IGetAllCharacter } from '../../data/character/characterData'

export default function Characters() {
  const { error, loading, data } = useQuery(GET_ALL_CHARACTER)

  const [characters, setCharacters] = useState<IGetAllCharacter>({
    characters: { results: [] },
  })

  useEffect(() => {
    if (data) {
      setCharacters(data)
    }
  }, [data])

  if (loading)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <FaSpinner className='animate-spin text-white text-3xl' />
      </div>
    )
  if (error) return <p>Oops, Something went wrong..</p>

  return (
    <div>
      <div className='max-w-[650px] mx-auto'>
        <h1 className='mx-auto text-3xl mb-4 w-max'>List Character</h1>

        <ListCharacter characters={characters} />
      </div>
    </div>
  )
}
