import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './App.css'

export default function navbar() {
  return (
     
    <header>
     <nav >
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/pages/projects">Projects</CustomLink>
          <CustomLink to="/pages/contact">Contact</CustomLink>
     </nav>
    </header>
  )
}
function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  return(
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}