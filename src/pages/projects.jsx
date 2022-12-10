import React from 'react'
import './projects.css'
export default function projects() {
  return (
    <div  id='projects'>
      <h1>
        Projects i'm currently working at
      </h1>
      <div className='cardRow'>
        <Card imgSrc={'../minecraft.png'} projectName={'Server creator'} projectDesc='Poorly made but still developed server creation tool for Minecraft' href={'https://github.com/jgrtowy/server-creator'}/>
        <Card imgSrc={'../moses.png'} projectName={'MosesBot'} projectDesc='Bot made along with my classmate for our discord server' href={'https://github.com/theSaintKappa/MosesBot'} />
      </div>
      <div className='cardRow'>
        <Card imgSrc={'../react.png'} projectName={'Portfolio site'} projectDesc={`Site you're currently at, made as my first (kinda) big project in React framework`} href={'https://github.com/jgrtowy/site'}/>
        <Card imgSrc={'../moses2.png'} projectName={'The Moses Cult'} projectDesc={`Idk if I can count it as a project but here you can join our comfy Discord community where MosesBot sits on. Everyone's welcome!`} href={'https://discord.gg/cHs56zgFBy'} />
      </div>
      <h2>And more to be coming!</h2>
    </div>
  )
}
function Card({imgSrc, projectName, projectDesc, href}) {
  return(
    <div className='card' onClick={() => {window.open(href)}}>
      <div className='cardContent'> 
      <img src={imgSrc} className='cardImg'/>
      <h1>{projectName}</h1><br/>
      </div>
      <p>{projectDesc}</p>
    </div>
  )
}
