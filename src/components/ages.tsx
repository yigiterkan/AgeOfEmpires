import React,{ useState } from 'react'

interface AgesProps {
  onAgeChange: any

}

const Ages = (props:AgesProps) => {
  const [ageValue, setAgeValue] = useState();

    const onWoodChange = (w) => {
      setAgeValue(w);
    };
    return (
      <div className='container'>
          <p className='header separate'>Ages</p>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={onWoodChange} value={"All"} type="button" className="btn btn-secondary .active">All</button>
            <button onClick={onWoodChange} value={"Dark"} type="button" className="btn btn-secondary">Dark</button>
            <button onClick={onWoodChange} value={"Feudal"} type="button" className="btn btn-secondary">Feudal</button>
            <button onClick={onWoodChange} value={"Castle"} type="button" className="btn btn-secondary">Castle</button>
            <button onClick={onWoodChange} value={"Imperial"} type="button" className="btn btn-secondary">Imprial</button>
          </div>
          <br/>
          
      </div>
    )
  
}

export default  Ages;