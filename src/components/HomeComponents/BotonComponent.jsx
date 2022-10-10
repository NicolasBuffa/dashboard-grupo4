import React from "react";
import { Link } from "react-router-dom";

function BotonComponent(props) {
  return (
    <>
    <Link className="articleHome__conteinerLink__link" to={props.url}>
      {props.type}
    </Link>
    </>
  );
}

export default BotonComponent;
