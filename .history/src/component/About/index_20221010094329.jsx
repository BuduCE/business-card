import React from 'react'
import './styles.css'
import Mail from './Mail.svg'
import LinkedIn from './linkedin.svg'
import Twitter from './Twitter.svg'

const About = () => {
  return (
    <div className='about'>
        {/* Info & Contact */}
        <div className="profile_info">
            <h1>Abdullah Oladeji</h1>
            <p>Chemist || Frontend Developer || Data Analyst</p>
            <small>(+234) 701 732 0766</small>

            <div className="social">
                  <a href="https://twitter.com/OladejiAbdullah">
                    <button className='mail'>
                        <img src={Twitter} alt="" />
                        <p>Twitter</p>
                    </button>
                </a>

                

                <a href="https://www.linkedin.com/in/abdullah-oladeji-340a52191/">
                    <button className='link'>
                        <img src={LinkedIn} alt="" />
                        <p>LinkedIn</p>
                    </button>
                </a>
            </div>
        </div>

        {/* About */}
        <div className="about_txt">
            <div className="abt_dev">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with the best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="int">
                <h2>Interest</h2>
                <p>Business. Tech. Travelling. Sports. Video Games. Volunteering</p>
            </div>
        </div>
    </div>
  )
}

export default About