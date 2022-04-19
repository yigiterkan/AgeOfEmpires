import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Menu from '../components/menu'
import HomePage from '../compontents/HomePage'
import ModuleDetails from '../compontents/ModuleDetails'
import Modules from '../compontents/Modules'

export const AppRouter = () => {
  return (
   <BrowserRouter>
   <div>
       <Header></Header>
       <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/modules' element={<Modules/>}/>
           <Route path='/moduleDetails' element={<ModuleDetails/>}/>
       </Routes>
   </div>
   </BrowserRouter>
  )
}
