import React from "react";
import { useState, useEffect } from "react";
import caja from "../../assets/package-variant-closed.svg";
import casa from "../../assets/home.svg";
import "./HomeComponent.css";
import DivInfoComponent from "./DivInfoComponent/DivInfoComponent";
import DivLinksComponent from "./DivLinksComponent/DivLinksComponent";

function HomeComponent() {
  const [datos, setDatos] = useState([]);
  const url = "http://localhost:4000/api/product";
  const products = {
    id: 0,
    img: caja,
    type: "Productos",
    url1: "/products",
    urlType: "Ver listado",
    url2: "/products/new",
    utlType2: "Agregar Producto",
  };
  const tiendas = {
    id: 1,
    img: casa,
    type: "Tiendas",
    url1: "/store",
    urlType: "Ver listado",
    url2: "/store/new",
    utlType2: "Agregar Tienda",
  };
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setDatos([
          {
            ...products,
            count: data.length,
          },
          {
            ...tiendas,
            count: 10,
          },
        ])
      );
  }, []);

  return (
    <>
      <section className="sectionHome">
        {datos.map((data) => (
          <article className="articleHome" key={data.id}>
            <DivInfoComponent
              img={data.img}
              count={data.count}
              type={data.type}
            />
            <DivLinksComponent
              url={data.url1}
              type={data.urlType}
              url2={data.url2}
              type2={data.utlType2}
            />
          </article>
        ))}
      </section>
    </>
  );
}

export default HomeComponent;
