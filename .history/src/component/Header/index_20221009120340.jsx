import React from 'react'
import './styles.css'
import image from './Abdullah_Oladeji.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className="profile_img">
            <img src={image} alt="Business Owner's" />
        </div>
    </div>
  )
}

export default Header