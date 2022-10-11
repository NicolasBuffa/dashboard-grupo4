import { SearchInput } from "../../../components/HeaderSearchInput/SearchInput";
import { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import HeaderContent from "../../../components/Header/HeaderContent/HeaderContent";
import AddProductButton from "../../../components/AddProductButton/AddProductButton";
import ProductListComponent from "../../../components/ProductsList/ProductsList";
import useWindowWidth from "../../../hooks/useWindowWidth";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [inputSearchActive, setInputSearchActive] = useState(false);
  const windowWidth = useWindowWidth();

  //Use Effect para que me resetee el input en mobile
  useEffect(() => {
    if (windowWidth > 576) setInputSearchActive(false);
  }, [windowWidth]);

  return (
    <>
      <Header>
        <HeaderContent>
          {!inputSearchActive && <h2>Product List</h2>}
        </HeaderContent>
        <HeaderContent>
          <SearchInput
            setProducts={setProducts}
            active={inputSearchActive}
            setActive={setInputSearchActive}
          />
          <AddProductButton inputSearchActive={inputSearchActive} />
        </HeaderContent>
      </Header>
      <ProductListComponent products={products} setProducts={setProducts} />
    </>
  );
}

export default ProductList;
