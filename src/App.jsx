import React, { useState, useRef, useEffect } from 'React'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from "./navbar";
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {
  return (
    <>
      <Navbar />
      <div className='cont'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pages/projects" element={<Projects />}></Route>
          <Route path="/pages/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  )
}
function Home(){
  return(
    <div id='main'>
     <div id='pfph1'>
       <img src="/pfp.gif" id='pfp' />
       <h1>Howdy!</h1>
       <h3>
         My name is Jgrtowy, irl also known as Dawid. <br />I'm 16yo, Polish (unfortunately) student. Currently 2nd grade in middle school at programmer course.<br/> Be sure to check out my stupid stuff here.
       </h3>
     </div>
   </div>
  )
}

export default App