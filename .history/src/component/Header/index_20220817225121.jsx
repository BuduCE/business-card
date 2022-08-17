import React from 'react'
import './styles.css'
import image from './Abdullah_.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className="profile_img">
            <img src={image} alt="Business Owner's image" />
        </div>
    </div>
  )
}

export default Header