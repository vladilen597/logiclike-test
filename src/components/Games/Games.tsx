import React from 'react'
import type { TGame } from '../../types/types'
import Game from './Game/Game'

import './Games.scss'

type TGamesProps = {
  games: TGame[]
  activeTag: string
}

const Games: React.FC<TGamesProps> = ({ games, activeTag }) => {
  const filteredGames = games.filter((game) => {
    if (activeTag !== 'Все темы') {
      return game.tags.includes(activeTag)
    } else {
      return games
    }
  })

  return (
    <ul className='games'>
      {filteredGames.map((game: TGame) => (
        <Game
          key={game.id}
          name={game.name}
          image={game.image}
          bgColor={game.bgColor}
        />
      ))}
    </ul>
  )
}

export default React.memo(Games)
