import React from 'react'
import Header from '../../components/Header'
import HeaderContent from '../../components/HeaderContent'
import menu from '../../assets/menu.svg'

function Home() {
  return (
    <>
      <Header> 
        <HeaderContent>
        <span className="menuButton"><img src={menu} alt="burgerButton" /></span> 
          <h1>Titulo</h1>
        </HeaderContent>   
        <HeaderContent>
          <input type="search" name="search"/>
          <button>boton</button>
        </HeaderContent> 
      </Header>          
    </>
  )
}

export default Home