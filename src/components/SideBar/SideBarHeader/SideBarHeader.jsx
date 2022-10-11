import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/MiEcommerce.png'
import './SideBarHeader.css'

const SideBarHeader = () => {
  return (
    <NavLink to='/'><img className='SideBarTitleImg' src={logo} alt={logo} /></NavLink>
  )
}

export default SideBarHeader