import React, { useEffect, useRef } from 'react'
import './Anchor.css'
import index from '../../../assets/home.svg'
import product from '../../../assets/package-variant-closed.svg'
import store from '../../../assets/store.svg'
import { NavLink } from 'react-router-dom'


export const Anchor = () => {
    const focusIndex= useRef()

    return (
        <article className='sideBar--buttons icon'>
            <NavLink className={({ isActive }) => isActive ? "sideBar--button_index active" : "sideBar--button_index"} ref={focusIndex} to='/home' ><img src={index} />Inicio</NavLink>
            <NavLink className={({ isActive }) => isActive ? "sideBar--button_products active" : "sideBar--button_products"} to="/products"><img src={product} />Productos</NavLink>
            <NavLink className={({ isActive }) => isActive ? "sideBar--button_store active" : "sideBar--button_store"} to='/store' ><img src={store} />Tiendas</NavLink>
        </article>
    )
}
