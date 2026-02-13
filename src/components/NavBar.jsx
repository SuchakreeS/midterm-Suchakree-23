import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <div className='flex justify-center gap-8 text-3xl p-4 bg-[#271028] text-white'>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "login">Login</NavLink>
        <NavLink to = "register">Register</NavLink>
        <NavLink to = "todos">Todos</NavLink>
        
    </div>
  )
}

export default NavBar