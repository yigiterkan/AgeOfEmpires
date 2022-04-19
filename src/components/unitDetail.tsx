
import React from 'react'

export default class UnitDetails extends React.Component {
  constructor(props){
    super(props);
    this.state={value: null};
  }
  render() {
    return (
      <div className='container'>
        <p className='header separate'>Birim Detay</p>
        <table className="table">
          <tbody>
            <tr>
              <td>ID :</td>
            </tr>
            <tr>
  
              <td>Name:</td>
            </tr>
            <tr>
              <td>Description:</td>
            </tr>
            <tr>
              <td>Min. Required Age:</td>
            </tr>
            <tr>
              <td>Wood Cost:</td>
            </tr>
            <tr>
              <td>Food Cost:</td>
            </tr>
            <tr>
              <td>Gold Cost:</td>
            </tr>
            <tr>
              <td>Build Time:</td>
            </tr>
            <tr>
              <td>Reload Time:</td>
            </tr>
            <tr>
              <td>Hit Points:</td>
            </tr>
            <tr>
              <td>Attack:</td>
            </tr>
            <tr>
              <td>Accuracy:</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
}
