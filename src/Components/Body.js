import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Body = () => {
  const isTheme=useSelector((store)=>store.theme.isTheme);
  const theme =isTheme?' bg-white text-black': 'bg-black text-white';

  return (
    <div className={`flex ${theme}  flex-1  overflow-hidden`}>
      <Sidebar/>
      <Outlet/>      
    </div>
  )
}

export default Body
