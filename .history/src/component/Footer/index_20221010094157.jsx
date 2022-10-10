import React from 'react'
import './styles.css'
import twitter from './Twitter.svg'
import git from './Git.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={git} alt="git" />
    </div>
  )
}

export default Footer