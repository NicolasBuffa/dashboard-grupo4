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
    let value= typeof Number



    const anchorFocus = (e) => {
        if (window.location.pathname === '/') {
            focusIndex.current.className = 'sideBar--button_index focus'
            focusProducts.current.className = "sideBar--button_products"
            focusStore.current.className = 'sideBar--button_store'
        }
        if (window.location.pathname === '/products' || window.location.pathname == `/products/${value}` || window.location.pathname === "/products/new") {
            focusProducts.current.className = 'sideBar--button_products focus'
            focusIndex.current.className = 'sideBar--button_index'
            focusStore.current.className = 'sideBar--button_store'
        }
        if (window.location.pathname === '/store') {
            focusStore.current.className = 'sideBar--button_store focus'
            focusIndex.current.className = 'sideBar--button_index'
            focusProducts.current.className = "sideBar--button_products"
        }
    }
    
    useEffect(()=>{
        anchorFocus()
    })

    useEffect(()=>{
        anchorFocus()
    },[focusNavLink])

    return (
        <article ref={focusNavLink} className='sideBar--buttons icon'>
            <NavLink className='sideBar--button_index' ref={focusIndex} to='/' onClick={anchorFocus}><img  src={index} />Inicio</NavLink>
            <NavLink className='sideBar--button_products' ref={focusProducts} to="/products" onClick={anchorFocus}><img  src={product} />Productos</NavLink>
            <NavLink className='sideBar--button_store' ref={focusStore} to='/store' onClick={anchorFocus}><img src={store} />Tiendas</NavLink>
        </article>
    )
}
