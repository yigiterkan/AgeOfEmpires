import React, { useState } from 'react'
import { useEffect } from 'react';
import DataTable from './dataTable'
import CostList from './costList'
import Ages from './ages';
import { unitService } from '../service/unitService';
import {MilitaryUnit} from '../data/UnitType'



function Unit() {
  const [age, setAge] = useState("All");
  const [cost, setCost] = useState({});
  const [data, setData] = useState<Array<MilitaryUnit>>([]);

  useEffect(() => {
    var params = unitService.getUnitByFilter(age, cost);

    setData(params);

  }, [age, cost]);

  function filteredList(unifiedCost) {
    setCost(unifiedCost);

  }

  function filteredAge(selectedAge) {
    setAge(selectedAge);

  }

  return (

    <div className='container'>
      <Ages onAgeChange={filteredAge} />
      <br />
      <CostList onCostChange={filteredList} />
      <br />
      <DataTable data={data} />
    </div>
  )

}

export default Unit;

