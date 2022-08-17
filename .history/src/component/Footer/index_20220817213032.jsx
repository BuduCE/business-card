import React from 'react'
import twitter from './Twitter.svg'
import facebook from './Facebook.svg'
import instagram from './instagram.svg'
import git from './git.svg'

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