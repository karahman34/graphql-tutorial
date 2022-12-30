import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  onSearch: (query: string) => void
}

export default function SearchCharacter(props: IProps) {
  const { onSearch } = props

  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = () => {
    setSearchParams({ search })
    onSearch(search)
  }

  useEffect(() => {
    const _search = searchParams.get('search')
    if (_search) {
      setSearch(_search)
      onSearch(_search)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='mb-4 flex flex-wrap gap-4 justify-center'>
      <input
        type='text'
        className='py-1 px-3 w-[250px] text-gray-700 text-sm rounded-md bg-white border-[3px] border-white focus:outline-none focus:border-green-500 transition-colors'
        placeholder='Search Characters'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === 'enter') handleSearch()
        }}
      />

      <button
        className='py-1 px-3 font-medium bg-white rounded-md flex items-center gap-2 text-gray-700 border border-white focus:border-green-500'
        onClick={() => handleSearch()}
      >
        <FaSearch />
        Search
      </button>
    </div>
  )
}
