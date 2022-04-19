import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Menu from '../components/menu'
import HomePage from '../components/homePage'
import UnitDetails from '../components/unitDetail'
import Unit from '../components/unit'

export const AppRouter = () => {
  return (
   <BrowserRouter>
   <div>
       <Menu></Menu>
       <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/Unit' element={<Unit/>}/>
           <Route path='/unitDetails' element={<UnitDetails/>}/>
       </Routes>
   </div>
   </BrowserRouter>
  )
}
