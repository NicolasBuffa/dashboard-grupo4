import React, { useEffect, useRef } from 'react'
import './Anchor.css'
import index from '../../../assets/home.svg'
import product from '../../../assets/package-variant-closed.svg'
import store from '../../../assets/store.svg'
import { NavLink } from 'react-router-dom'


export const Anchor = () => {
    const focusIndex = useRef()
    const focusProducts = useRef()
    const focusStore = useRef()
    const focusNavLink=useRef()



    const anchorFocus = (e) => {
        if (window.location.pathname === '/') {
            focusProducts.current.className = "sideBar--button_products"
            focusStore.current.className = 'sideBar--button_store'
            focusIndex.current.className = 'sideBar--button_index focus'
        }
        if (window.location.pathname === '/products' || window.location.pathname === `/products/${JSON.stringify(Number(1-100))}` || window.location.pathname === "/products/new") {
            focusProducts.current.className = 'sideBar--button_products focus'
            focusStore.current.className = 'sideBar--button_store'
            focusIndex.current.className = 'sideBar--button_index'
        }
        if (window.location.pathname === '/store') {
            focusProducts.current.className = "sideBar--button_products"
            focusIndex.current.className = 'sideBar--button_index'
            focusStore.current.className = 'sideBar--button_store focus'
        }
    }
    
    useEffect(()=>{
        anchorFocus()
    })

    return (
        <article ref={focusNavLink} className='sideBar--buttons icon'>
            <NavLink className='sideBar--button_index' ref={focusIndex} to='/' onClick={anchorFocus}><img  src={index} />Inicio</NavLink>
            <NavLink className='sideBar--button_products' ref={focusProducts} to="/products" onClick={anchorFocus}><img  src={product} />Productos</NavLink>
            <NavLink className='sideBar--button_store' ref={focusStore} to='/store' onClick={anchorFocus}><img src={store} />Tiendas</NavLink>
        </article>
    )
}
