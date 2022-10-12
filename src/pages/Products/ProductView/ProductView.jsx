import "./ProductView.css";

import { Link, useParams } from "react-router-dom";
import { useRef } from "react";

import { useForm } from "../../../hooks/useForm";
import { useGetOneProduct } from "../../../hooks/useGetOneProduct";

import HeaderContent from "../../../components/Header/HeaderContent/HeaderContent";
import Header from "../../../components/Header/Header";
import Form from "../../../components/Form/Form";

let initialForm = {
  id: null,
  title: "",
  price: 0,
  stock: 0,
  description: "",
  category: "",
  images: [],
  rating: {
    rate: 0,
    count: 0,
  },
};

function ProductView() {
  const { id } = useParams();

  const { product } = useGetOneProduct(initialForm);

  const {
    formState,
    onInputChange,
    handdleAddImage,
    handleDecrement,
    handleIncrement,
    handleSubmit,
    handdleDelete,
    onResetForm,
    price,
    description,
    title,
    stock,
    images,
  } = useForm(initialForm);
  const showImage = product.images;

  return (
    <div className="productView-container">
      <Header>
        <HeaderContent>
          <h2>
          <Link to="/products">Productos </Link> <span>&#62; #</span> {product.id}
          </h2>
        </HeaderContent>
        <HeaderContent>
          <button
            type="button"
            className=" submitButton"
            onClick={handdleDelete}
          >
            Eliminar
          </button>
        </HeaderContent>
      </Header>

      {/* Esto es un componente con la info del producto */}
      <div className="productView-container_detail">
        <div className="productView-container_detailContainerMain">
          <div className="productView-container_detail_containerProductPic">
            <div className="picture">
              <img src={product.images[0]} alt="" />
            </div>
          </div>

          <div className="productView-container_detailContainer">
            <h4>{product.title}</h4>

            <div className="container_detailContainer">
              <p className="amount">{product.price}</p>
              <p className="amountDetail">PUNTOS SUPERCLUB</p>
              <p className="amount">{product.stock}</p>
              <p className="amountDetail">STOCK DISPONIBLE</p>
              <p>OLIVIA STORE</p>
            </div>
          </div>
        </div>
        {/* esto es un componente con un use form */}
        <div className="productView-container_formContainer">
          <h3>Informacion</h3>
          <Form product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductView;
