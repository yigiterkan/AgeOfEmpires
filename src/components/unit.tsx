import React, { useState } from 'react'
import { useEffect } from 'react';
import DataTable from './dataTable'
import CostList from './costList'
import Ages from './ages';
import { unitService } from '../service/unitService';



function Unit()  {
 
  useEffect(() => {
    // tarayıcının başlık bölümünü değiştirmemizi sağlar
    document.title = `You clicked  times`;
  },[]);
  
  function mahmut(f,g,w){
    //burada filtreleyecek service i çağır 

  }
  
    return (
      <div className='container'>
          <Ages/>
          <br/>
          <CostList onCostChange={mahmut}/>
          <br/>
          <DataTable/>
      </div>
    )
  
}

export default Unit;

