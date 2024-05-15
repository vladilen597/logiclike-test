import React, { useState } from 'react'
import type { TTag } from '../../types/types'

import './Navigation.scss'
import Tab from './Tab/Tab'

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
        <Tab
          name='Все темы'
          isActive={activeTab === 'Все темы'}
          setIsActive={() => setActiveTab('Все темы')}
        />
        {tags.map((tag) => (
          <Tab
            key={tag}
            name={tag}
            isActive={activeTab === tag}
            setIsActive={() => setActiveTab(tag)}
          />
        ))}
      </ul>
    </nav>
  )
}

export default React.memo(Navigation)
