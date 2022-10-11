import React from "react";
import "./Component404.css";
import HashLoader from "react-spinners/HashLoader";

function Component404() {
  const color = "#36d7b7";

  return (
    <div className="conteiner404">
        <h3 className="conteiner404_span">404</h3>
        <p className="conteiner404_p">
          Lo siento el contenido que buscas no existe, o se eliminó o
          escribiste mal el enlace.
        </p>
        <div className="conteiner404_gif">
          <HashLoader color={color}></HashLoader>
        </div>
    </div>
  );
}

export default Component404;
