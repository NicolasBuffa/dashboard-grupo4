import { SearchInput } from "../../../components/HeaderSearchInput/SearchInput";
import { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import HeaderContent from "../../../components/Header/HeaderContent/HeaderContent";
import AddProductButton from "../../../components/AddProductButton/AddProductButton";
import ProductListComponent from "../../../components/ProductsList/ProductsList";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { getProductsAPI } from "../../../utils/methods";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [inputSearchActive, setInputSearchActive] = useState(false);
  const windowWidth = useWindowWidth();
  //
  const [loading, setLoading] = useState(false); //Me lo puedo llevar
  const [loadingImage, setLoadingImage] = useState(false); //Me lo puedo llevar

  useEffect(() => {
    setLoading(true);
    setLoadingImage(true);
    //Carga de productos e imagenes
    delayProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function delayProductList() {
    setTimeout(() => {
      setLoading(false);
      getProducts();
      delayProductsImage();
    }, Math.random() * 2500);
  }
  function delayProductsImage() {
    //Carga de imagen
    setTimeout(() => {
      setLoadingImage(false);
    }, 3000);
  }

  async function getProducts() {
    try {
      const response = await getProductsAPI();
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      return error;
    }
  }

  //

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
      <ProductListComponent
        loading={loading}
        loadingImage={loadingImage}
        products={products}
      />
    </>
  );
}

export default ProductList;
