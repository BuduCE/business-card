import React from 'react'
import './styles.css'
import image from './profile_img.svg'

const Header = () => {
  return (
    <div>
        <div className="profile_img">
            <img src={image} alt="" />
        </div>
        <div className="profile_info"></div>
    </div>
  )
}

export default Header