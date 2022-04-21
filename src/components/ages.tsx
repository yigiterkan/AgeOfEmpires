import React from 'react'

function Ages() {
 
    return (
      <div className='container'>
          <p className='header separate'>Ages</p>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary .active">All</button>
            <button type="button" className="btn btn-secondary">Dark</button>
            <button type="button" className="btn btn-secondary">Feudal</button>
            <button type="button" className="btn btn-secondary">Castle</button>
            <button type="button" className="btn btn-secondary">Imprial</button>
          </div>
          <br/>
          
      </div>
    )
  
}

export default  Ages;