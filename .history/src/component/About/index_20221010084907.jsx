import React from 'react'
import './styles.css'
import Mail from './Mail.svg'
import LinkedIn from './linkedin.svg'

const About = () => {
  return (
    <div className='about'>
        {/* Info & Contact */}
        <div className="profile_info">
            <h1>Abdullah Oladeji</h1>
            <p>Frontend Developer || Data Analyst || </p>
            {/* <p></p> */}
            <small>oladejiabdullah17@gmail.com</small>

            <div className="social">
                <button className='mail'>
                    <img src={Mail} alt="" />
                    <p>Email</p>
                </button>
                <button className='link'>
                    <img src={LinkedIn} alt="" />
                    <p>LinkedIn</p>
                </button>
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
                <p>Food expert. Reader. Internet fanatic. Entrepreneur. Travel geek. Islam. Sunnah. Coffee fanatic.</p>
            </div>
        </div>
    </div>
  )
}

export default About