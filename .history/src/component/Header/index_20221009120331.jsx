import React from 'react'
import './styles.css'
import ownerImage from './Abdullah_Oladeji.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className="profile_img">
            <img src={ownerImage} alt="Business Owner's" />
        </div>
    </div>
  )
}

export default Header