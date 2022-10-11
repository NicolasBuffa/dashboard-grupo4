import React from "react";
import PropageLoader  from 'react-spinners/PropagateLoader'
 import "./TiendaComponente.css";


function TiendaComponents() {
  const color= '#36d7b7'
  return (
    <>
      <div className="tiendaContainer">
        <h1 className="tiendaContainer_H1">proximamente</h1>
        <p className="tiendaContainer_P">Pagina en construccion.</p>
        <div className="tiendaContainter_gif">
        <PropageLoader
        color={color}
        ></PropageLoader>

        </div>
      </div>
    </>
  );
}

export default TiendaComponents;
