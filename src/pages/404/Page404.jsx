/* istanbul ignore file */
import React from 'react'
import Component404 from '../../components/Components404/Component404'
import Header from "../../components/Header/Header";
import HeaderContent from "../../components/Header/HeaderContent/HeaderContent";
import { Link } from "react-router-dom";
import Home from "../Home/Home";



function Page404() {
  return (
  
       <>
      <Header>
        <HeaderContent>
          <Link className="linkTienda" to="/" element={<Home />}>
            Volver al Inicio
          </Link>
        </HeaderContent>
      </Header>
      <Component404/>
    </>
        
   
  )
}

export default Page404