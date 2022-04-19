import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div >
        <header>
            <nav className='navbar nav menuItem'>
                  <NavLink to="/" activeclassname="active" >Home Page</NavLink>
                  <NavLink to="/menu" activeclassname="active">Units Page</NavLink>
                  <NavLink to="/moduleDetails" activeclassname="active">Unit Detail Page</NavLink>
            </nav>
          
        </header>
    </div>
    
  )
}

export default Menu

//margin eklenecek scss ile