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
  },[filteredList,filteredAge]);
  
  function filteredList(_f: any,_g: any,_w: any){
    //burada filtreleyecek service i çağır 
    

  }

  function filteredAge(_age: any){

  }
  
    return (
      <div className='container'>
          <Ages onAgeChange={filteredAge}/>
          <br/>
          <CostList onCostChange={filteredList}/>
          <br/>
          <DataTable/>
      </div>
    )
  
}

export default Unit;

