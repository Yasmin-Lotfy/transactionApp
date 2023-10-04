import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'

export default function Layout() {
  return (
    <>
     <div className='container'>
        <div className="row">
       
          <Outlet />
        </div>
      </div>
    
    </>
  )
}
