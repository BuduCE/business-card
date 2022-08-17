import React from 'react'
import './styles.css'
import image from './profile_img.svg'
import Mail from './Mail.svg'
import LinkedIn from './linkedin.svg'

const Header = () => {
  return (
    < className=''>
        <div className="profile_img">
            <img src={image} alt="Business Owner's image" />
        </div>
        <div className="profile_info">
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <small>laurasmith.website</small>

            <div className="social">
                <button>
                    <img src={Mail} alt="" />
                    <p>Email</p>
                </button>
                <button>
                    <img src={LinkedIn} alt="" />
                    <p>LinkedIn</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header