import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div >
        <header>
            <nav className='navbar nav menuItem'>
                  <NavLink to="/" className="active" >Home Page</NavLink>
                  <NavLink to="/unit" className="active">Units Page</NavLink>
                  <NavLink to="/unitDetails" className="active">Unit Detail Page</NavLink>
            </nav>
          
        </header>
    </div>
    
  )
}

export default Menu

//margin eklenecek scss ile