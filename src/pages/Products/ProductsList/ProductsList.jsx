import { SearchInput } from "../../../components/HeaderSearchInput/SearchInput";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import MoonLoader from "react-spinners/MoonLoader";
import notFound from "../../../assets/notFound.png";
import Header from "../../../components/Header/Header";
import HeaderContent from "../../../components/Header/HeaderContent/HeaderContent";
import AddProductButton from "../../../components/AddProductButton/AddProductButton";
import "./ProductsList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [inputSearchActive, setInputSearchActive] = useState(false);

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
      const response = await fetch("http://localhost:4000/api/product");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <Header>
        <HeaderContent>
          {!inputSearchActive && <h1>Product List</h1>}
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

      <section className="productList">
        {loading ? (
          <div className="productList__productsLoader">
            <ClockLoader
              color={"#0cb093"}
              loading={loading}
              size={90}
              aria-label="Loading Spinner"
            />
          </div>
        ) : products.length ? (
          products.map((product) => (
            <article className="productList__article" key={product.id}>
              <Link to={`/products/${product.id}`}>
                {loadingImage ? (
                  <div className="productList__imagesLoader">
                    <MoonLoader
                      color={"#0cb093"}
                      loading={loadingImage}
                      size={25}
                      aria-label="Loading Spinner"
                    />
                  </div>
                ) : (
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="productList__article__img"
                  />
                )}

                <div className="product__article__specification">
                  <span>{product.title}</span> <span>#{product.id}</span>
                </div>
                <div>
                  <span>{">"}</span>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <div className="productNotFound">
            <p>Lo sentimos, producto no encontrado</p>
            <img src={notFound} alt="sorry product not found" />
          </div>
        )}
      </section>
    </>
  );
}

export default ProductList;
