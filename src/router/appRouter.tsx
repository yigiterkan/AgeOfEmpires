import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Menu from '../components/menu'
import HomePage from '../components/homePage'
import ModuleDetails from '../components/unitDetail'
import Modules from '../components/unit'

export const AppRouter = () => {
  return (
   <BrowserRouter>
   <div>
       <Menu></Menu>
       <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/unit' element={<Modules/>}/>
           <Route path='/unitDetails' element={<ModuleDetails/>}/>
       </Routes>
   </div>
   </BrowserRouter>
  )
}
