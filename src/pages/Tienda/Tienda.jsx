import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderContent from "../../components/Header/HeaderContent/HeaderContent";
import TiendaComponents from "../../components/Tienda/TiendaComponents";
import Home from "../Home/Home";
import '../Tienda/Tienda.css'

function Tienda() {
  return (
    <>
      <Header>
        <HeaderContent>
          <Link className="linkTienda" to="/" element={<Home />}>
            Volver al Inicio
          </Link>
        </HeaderContent>
      </Header>
      <TiendaComponents />
    </>
  );
}

export default Tienda;
