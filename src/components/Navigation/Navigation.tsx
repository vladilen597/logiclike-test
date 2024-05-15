import React, { useState } from 'react'
import type { TTag } from '../../types/types'

import './Navigation.scss'

type TNavigationProps = {
  tags: TTag[]
  activeTab: string
  setActiveTab: (tag: string) => void
}

const Navigation: React.FC<TNavigationProps> = ({
  tags,
  activeTab,
  setActiveTab,
}) => {
  return (
    <nav className='navigation'>
      <ul className='navigation__tags'>
        <li className='navigation__tag'>
          <button
            className={`navigation__button ${
              activeTab === 'Все темы' && 'navigation__button--active'
            }`}
            onClick={() => setActiveTab('Все темы')}
          >
            Все темы
          </button>
        </li>
        {tags.map((tag) => (
          <li key={tag} className='navigation__tag'>
            <button
              className={`navigation__button ${
                activeTab === tag && 'navigation__button--active'
              }`}
              onClick={() => setActiveTab(tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
