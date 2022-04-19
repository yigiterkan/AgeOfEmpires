import React from 'react'
import ageofempire from '../images/ageofempires.jpg'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div className="wrapper">

        <img className='homePageImg' src={ageofempire} alt="fireSpot" />
      </div>
    )
  }

}

