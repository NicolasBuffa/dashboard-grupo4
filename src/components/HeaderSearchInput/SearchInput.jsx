import { useState } from "react";
import magnify from "../../assets/magnify.svg";
import useWindowWidth from "../../hooks/useWindowWidth";
import "./SearchInput.css";
import { getProductsAPI } from "../../utils/methods";
export const SearchInput = ({ setProducts, active, setActive }) => {
  const [value, setValue] = useState("");
  const [searchInputProducts, setSearchInputProducts] = useState();
  const windowWidth = useWindowWidth();

  async function handleInput(value) {
    try {
      const response = await getProductsAPI();
      const data = await response.json();
      setSearchInputProducts(data);
      setValue(value.toLowerCase());
      const filterProducts = searchInputProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(value) ||
          product.category.toLowerCase().includes(value) ||
          product.description.toLowerCase().includes(value) ||
          product.id === Number(value)
      );
      setProducts(filterProducts);
    } catch (error) {
      return error;
    }
  }
  function mobileBehavior() {
    if (windowWidth <= 576) {
      setActive(!active);
    }
  }

  return (
    <>
      <div
        className="inputSearchContainer"
        style={active ? { maxWidth: `${75}vw`, width: `${75}vw` } : null}
        onClick={mobileBehavior}
      >
        <button
          className="btnCloseSearch"
          onClick={() => setActive(false)}
          style={
            windowWidth > 576
              ? { display: "none" }
              : active
              ? { display: "inline" }
              : { display: "none" }
          }
        >
          X
        </button>
        <input
          type="search"
          value={value}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="Buscar productos"
          onClick={(e) => e.stopPropagation()}
          style={
            windowWidth > 576
              ? { display: "block" }
              : active
              ? { display: "block" }
              : { display: "none" }
          }
        />
        <img src={magnify} alt="magnify glass" className="icon" />
      </div>
    </>
  );
};
