
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { MilitaryUnit } from '../data/UnitType';
import { unitService } from '../service/unitService';


const UnitDetails = () => {
  const [selectedChar, setChar] = useState<MilitaryUnit>();
  let { id } = useParams();
 
  useEffect(() => {
    var char = unitService.getUnitById(id);

    setChar(char);
  }, [id])

  return (
    <div className='container'>
      <p className='header separate'>Birim Detay</p>
      <table className="table">
        <tbody>
          <tr>
            <td>ID :{selectedChar?.id}</td>
          </tr>
          <tr>

            <td>Name:{selectedChar?.name}</td>
          </tr>
          <tr>
            <td>Description:{selectedChar?.description}</td>
          </tr>
          <tr>
            <td>Min. Required Age:{selectedChar?.age}</td>
          </tr>
          <tr>
            <td>Wood Cost:{selectedChar?.cost?.Wood}</td>
          </tr>
          <tr>
            <td>Food Cost:{selectedChar?.cost?.Food}</td>
          </tr>
          <tr>
            <td>Gold Cost:{selectedChar?.cost?.Gold}</td>
          </tr>
          <tr>
            <td>Build Time:{selectedChar?.build_time}</td>
          </tr>
          <tr>
            <td>Reload Time:{selectedChar?.reload_time}</td>
          </tr>
          <tr>
            <td>Hit Points:{selectedChar?.hit_points}</td>
          </tr>
          <tr>
            <td>Attack:{selectedChar?.attack}</td>
          </tr>
          <tr>
            <td>Accuracy:{selectedChar?.accuracy}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}
export default UnitDetails;