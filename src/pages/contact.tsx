import React, { Component } from 'react'
import './contact.css'



export default function contact() {
  return (
    <>
    <div id='contact'>
      <h1>Feel free to contact me there</h1>
      <div className='contactCardRow'>
          <ContactCard imgSrc={"../icons/github.png"} name={'Github'} href={'https://github.com/jgrtowy'}/>
          <ContactCard imgSrc={"../icons/twitter.png"} name={'Twitter'} href={'https://twitter.com/@jgrtowy'}/>
          <ContactCard imgSrc={"../icons/discord.png"} name={'Discord'} href={'https://discord.com/users/304961013202288651/'}/>
      </div>
      </div>
    </>
  )
}
function ContactCard({imgSrc, name, href}) {
  return(
    <div className='contactCard' onClick={() => {window.open(href)}}>
      <div className='contactCardContent'>  
      <img src={imgSrc} className='contactCardImg'/>
      <h1>{name}</h1><br/>
      </div>
    </div>
  )
}