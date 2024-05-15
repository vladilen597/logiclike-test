import React from 'react'

import './Tab.scss'

type TTabProps = {
  name: string
  isActive: boolean
  setIsActive: () => void
}

const Tab: React.FC<TTabProps> = ({ name, isActive, setIsActive }) => {
  return (
    <li className='tab'>
      <button
        className={`tab__button ${isActive && 'tab__button--active'}`}
        onClick={setIsActive}
      >
        {name}
      </button>
    </li>
  )
}

export default React.memo(Tab)
