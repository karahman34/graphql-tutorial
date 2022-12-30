import { useGetAllCharactersQuery } from '../../graphql/queries/character/useGetAllCharactersQuery'
import { FaSpinner } from 'react-icons/fa'
import ListCharacter from '../../components/character/ListCharacter'
import SearchCharacter from '../../components/character/SearchCharacter'

export default function Characters() {
  const {
    error,
    loading,
    data: listCharacter,
    refetch,
  } = useGetAllCharactersQuery()

  if (loading)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <FaSpinner className='animate-spin text-white text-3xl' />
      </div>
    )
  if (error) return <p>Oops, Something went wrong..</p>

  const handleSearch = (search: string) => {
    refetch({
      filter: {
        name: search,
      },
    })
  }

  return (
    <div className='pt-4 py-4'>
      <div className='max-w-[650px] mx-auto'>
        <h1 className='mx-auto text-3xl mb-4 w-max font-bold'>
          Rick & Morty Characters
        </h1>

        <SearchCharacter onSearch={handleSearch} />

        <ListCharacter characters={listCharacter} />
      </div>
    </div>
  )
}
