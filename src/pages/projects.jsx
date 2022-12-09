import React from 'react'
import './projects.css'
export default function projects() {
  return (
    <div  id='projects'>
      <h1>
        Projects
      </h1>
      <div className='cardRow'>
        <Card imgSrc={'../minecraft.png'} projectName={'Server creator'} projectDesc='Poorly but still developed server creation tool for Minecraft!' href={'https://github.com/jgrtowy/server-creator'}/>
        <Card imgSrc={'../moses.png'} projectName={'MosesBot'} projectDesc='Bot made along with my classmate for our discord server' href={'https://github.com/theSaintKappa/MosesBot'} />
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
