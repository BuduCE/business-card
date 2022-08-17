import React from 'react'
import './styles.css'
import image from './profile_img.svg'

const Header = () => {
  return (
    <div>
        <div className="profile_img">
            <img src={image} alt="Business Owner's image" />
        </div>
        <div className="profile_info">
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <small>laurasmith.website</small>

            <div className="social">
                <button>
                    imag
                </button>
                <button></button>
            </div>
        </div>
    </div>
  )
}

export default Header