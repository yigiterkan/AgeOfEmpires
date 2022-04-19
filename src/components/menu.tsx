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
            <NavLink to="/" className="active" >Home Page</NavLink>
            <NavLink to="/unit" className="active">Units Page</NavLink>
            <NavLink to="/unitDetails" className="active">Unit Detail Page</NavLink>
          </nav>

        </header>
      </div>

    )
  }

}



//margin eklenecek scss ile