import React from "react";
import { Link } from "react-router-dom";
import './DivLinksComponent.css'
function DivLinksComponent(props) {
  return (
    <>
      <div className="articleHome__conteinerLink">
        <Link className="articleHome__conteinerLink__link" to={props.url}> {props.type}</Link>
        <Link className="articleHome__conteinerLink__link" to={props.url2}> {props.type2}</Link>
      </div>
    </>
  );
}

export default DivLinksComponent;
