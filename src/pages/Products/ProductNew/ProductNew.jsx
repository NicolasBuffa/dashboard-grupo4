import "../ProductView/ProductView.css";
import { useEffect } from "react";
import { useForm } from "../../../hooks/useForm";
import { useGetOneProduct } from "../../../hooks/useGetOneProduct";

import { useParams } from "react-router-dom";

import FormNewProduct from "../../../components/Form/FormNewProduct";

import HeaderContent from "../../../components/Header/HeaderContent/HeaderContent";
import Header from "../../../components/Header/Header";

let initialForm = {
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

function ProductNew() {
  const { product } = useGetOneProduct(initialForm);

  const params = useParams();

  const {
    onInputChange,
    handdleAddImage,
    handleSubmit,
    handleSubmitNewProduct,
    handdleDelete,
    handleDecrement,
    handleIncrement,
    onResetForm,
    // Valores del formState
    formState,
    price,
    description,
    title,
    stock,
    images,
  } = useForm(initialForm);
  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div className="productView-container">
      <Header>
        <HeaderContent>
          <h1>Productos &#62; Nuevo Producto</h1>
        </HeaderContent>
        <HeaderContent></HeaderContent>
      </Header>

      {/* Esto es un componente con la info del producto */}
      <div className="productView-container_detail">
        <div className="productView-container_detailContainerMain"></div>
        {/* esto es un componente con un use form */}
        <div className="productView-container_formContainer">
          <h3>Informacion</h3>
          <FormNewProduct product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductNew;
