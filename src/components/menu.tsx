import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div >
        <header>
          <nav className='navbar nav menuItem'>
            <NavLink to="/" className="menuItem" >Home Page</NavLink>
            <NavLink to="/unit" className="menuItem">Units Page</NavLink>
            <NavLink to="/unitDetails" className="menuItem">Unit Detail Page</NavLink>
          </nav>

        </header>
      </div>

    )
  }

}



//margin eklenecek scss ile