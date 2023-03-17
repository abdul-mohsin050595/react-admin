import React from 'react'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { BrowserRouter } from 'react-router-dom'
import Allroutes from '../Allroutes'
import "./layout.css"
import Thememenu from '../Thememenu/Thememenu'
import { useSelector } from 'react-redux'

function Layout() {
  const theme = useSelector(state => state.theme)
  return (
    <BrowserRouter>
      <div className={`layout ${theme.mode} ${theme.color}`}>
        <Navbar />
        <div className='layout_content'>
          <Sidebar />
          <Thememenu />
          <main className='layout_content_main'>
            <Allroutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout