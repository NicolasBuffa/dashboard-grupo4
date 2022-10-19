import { Link } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import MoonLoader from "react-spinners/MoonLoader";
import notFound from "../../assets/notFound.png";
import "./ProductsList.css";

export default function ProductsList({ products, loading, loadingImage }) {
  return (
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
  );
}
