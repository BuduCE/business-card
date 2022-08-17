import React from 'react'
import './styles.css'
import twitter from './Twitter.svg'
import facebook from './Facebook.svg'
import instagram from './Instagram.svg'
import git from './Git.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instgram" />
        <img src={git} alt="git" />
    </div>
  )
}

export default Footer