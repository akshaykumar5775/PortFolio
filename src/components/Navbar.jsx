import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
       <NavLink to="/" className="w-55 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
          <p className='blue-gradient_text p'><span style={{color:'white'}}>..</span> Home <span style={{color:'white'}}>..</span></p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/about" className={({isActive})=>isActive?"text-blue-500":"text-black"}>
            About
          </NavLink>
          <a href="https://docs.google.com/document/d/1uQDmB_L9fVT3TvcOXimvSIPvyLIHIn_2KZ5Li8Av36c/edit?usp=sharing"> Resume</a>
          <NavLink to="/contact" className={({isActive})=>isActive?"text-blue-500":"text-black"}>
            Contact
          </NavLink>
          <NavLink to="/projects" className={({isActive})=>isActive?"text-blue-500":"text-black"}>
            Projects
          </NavLink>
        </nav>
    </header>
  )
}

export default Navbar