import './App.scss'
import Navigation from './Navigation/Navigation'
import Games from './Games/Games'
import { useEffect, useState } from 'react'
import { loadGames, getTags } from '../utils/getGames'
import type { TGame, TTag } from '../types/types'

import '../utils/reset.css'
import '../static/fonts.css'

const App: React.FC = () => {
  const [games, setGames] = useState<TGame[]>([])
  const [tags, setTags] = useState<TTag[]>([])
  const [activeTag, setActiveTag] = useState('Все темы')

  const getGames = async () => {
    const data = await loadGames()
    setGames(data)

    setTags(getTags(data))
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <div className='app'>
      <Navigation
        tags={tags}
        activeTab={activeTag}
        setActiveTab={setActiveTag}
      />
      <Games games={games} activeTag={activeTag} />
    </div>
  )
}

export default App
