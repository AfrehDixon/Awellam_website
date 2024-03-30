import React from 'react'
import './Header.css'

export const Header = ({title,subTitle}) => {
  return (
      <div className='title'>
          <p>{ subTitle  }</p>
          <h2>{ title }</h2>
    </div>
  )
}
