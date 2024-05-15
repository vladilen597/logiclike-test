import React from 'react'

import './Game.scss'

type TGameProps = {
  name: string
  image: string
  bgColor: string
}

const Game: React.FC<TGameProps> = ({ name, image, bgColor }) => {
  return (
    <li className='game'>
      <div style={{ backgroundColor: bgColor }} className='game__top'>
        <img className='game__image' src={image} />
      </div>
      <span className='game__bottom'>{name}</span>
    </li>
  )
}

export default Game
