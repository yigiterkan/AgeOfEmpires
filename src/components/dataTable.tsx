import React from 'react'



export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div className='container'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">age</th>
              <th scope="col">costs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Archer</td>
              <td>Feudal</td>
              <td>Food:25 Gold:45</td>
            </tr>
          </tbody>
        </table>
      </div>
    )

  }

}
