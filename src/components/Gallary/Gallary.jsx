import React from 'react'
import gallary1 from '../../assets/gallary1.jpg'
import gallary2 from '../../assets/gallary2.jpg'
import './Gallary.css'
import { GoArrowRight } from 'react-icons/go'

export default function Gallary() {
  return (
      <div className='gallarys'>
          <div className='gallary'>
              <img src={gallary1} alt="" />
              <img src={gallary2} alt="" />
              <img src={gallary1} alt="" />
              <img src={ gallary2 } alt="" />
          </div>
              <button className='btn'>See More <GoArrowRight className=''/></button>
    </div>
  )
}
