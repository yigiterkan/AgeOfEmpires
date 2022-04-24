import React,{ useState } from 'react'

interface AgesProps {
  onAgeChange:any

}

const Ages = (props:AgesProps) => {
  const [ageValue, setAgeValue] = useState();

  const handleClick = (e) => {
  debugger
    console.log(e);
    setAgeValue(e);
    props.onAgeChange(e)
  }

    return (
      <div className='container'>
          <p className='header separate'>Ages</p>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={e => handleClick("All")} value={"All"} type="button" className="btn btn-secondary .active">All</button>
            <button onClick={e => handleClick("Dark")} value={"Dark"} type="button" className="btn btn-secondary">Dark</button>
            <button onClick={e => handleClick("Feudal")} value={"Feudal"} type="button" className="btn btn-secondary">Feudal</button>
            <button onClick={e => handleClick("Castle")} value={"Castle"} type="button" className="btn btn-secondary">Castle</button>
            <button onClick={e => handleClick("Imperial")} value={"Imperial"} type="button" className="btn btn-secondary">Imprial</button>
          </div>
          <br/>
          
      </div>
    )
  
}

export default  Ages;