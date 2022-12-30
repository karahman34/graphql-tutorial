import { createBrowserRouter } from 'react-router-dom'
import Characters from './pages/characters/Characters'
import CharacterDetail from './pages/characterDetail/CharacterDetail'

export default function router() {
  return createBrowserRouter([
    {
      path: '/',
      element: <Characters />,
    },
    {
      path: '/character/:characterId',
      element: <CharacterDetail />,
    },
  ])
}
