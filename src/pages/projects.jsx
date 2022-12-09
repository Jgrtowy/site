import React from 'react'
import './projects.css'
export default function projects() {
  return (
    <div  id='projects'>
      <h1>
        Projects
      </h1>
      <div id='cardContainer'>
        <Card />
      </div>
    </div>
  )
}
let imgSrc = '../minecraft.png'
function Card() {
  return(
    <div className='card'>
      <img src={imgSrc} className='cardImg'/>
    </div>
  )
}