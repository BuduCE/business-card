import React from 'react'
import './styles.css'

const About = () => {
  return (
    <div className='about'>
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

        {/*  */}
    </div>
  )
}

export default About