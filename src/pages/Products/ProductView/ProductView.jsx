<<<<<<< Updated upstream
import React from 'react'

function ProductView() {
  return (
    <div>ProductView</div>
  )
=======
import { useForm } from "../../../hooks/useForm";
import { useGetOneProduct } from "../../../hooks/useGetOneProduct";
import "./ProductView.css";
import { useParams } from "react-router-dom";

let initialForm = {
  id: 0,
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
  const params = useParams();
  const { product } = useGetOneProduct(params.id, initialForm);

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
  console.log(showImage);
  return (
    <div className="productView-container">
      <h2>Producto # {product.id}</h2>
      {showImage.map((e) => {
        return <p>olis</p>;
      })}
      <p>cualquiercosa</p>
      <button
        type="button"
        className="buttonProductView"
        onClick={handdleDelete}
      >
        Eliminar
      </button>
      {/* Esto es un componente con la info del producto */}
      <div className="productView-container_detail">
        <div className="productView-container_detailContainerMain">
          <div className="productView-container_detail_containerProductPic">
            <div className="picture">
              <img src={product.images} alt="" />
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
          <form onSubmit={handleSubmit} action="submit">
            <label>Nombre</label>
            <input
              className="inputForm"
              type="text"
              placeholder="inputValue"
              name="title"
              value={title}
              onChange={onInputChange}
            />

            <label>Valor</label>
            <input
              className="inputForm"
              type="number"
              placeholder="inputValue"
              name="price"
              value={price}
              onChange={onInputChange}
            />

            <label>Stock</label>
            <div>
              <button
                className="buttonStock"
                type="button"
                onClick={handleDecrement}
              >
                -
              </button>

              <input
                className="inputForm"
                type="number"
                placeholder="inputValue"
                name="stock"
                value={stock}
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <button
                className="buttonStock"
                type="button"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>

            <label>Description</label>
            <textarea
              className="inputForm"
              type="text"
              placeholder="inputValue"
              name="description"
              value={description}
              onChange={onInputChange}
              rows="12"
            />

            <label>Tienda</label>
            <select className="inputForm" name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <h3>Galeria de Imagenes</h3>

            <label>Nueva Imagen</label>
            <div className="containerUploadImages">
              <input
                className="inputForm "
                name="images"
                id="inputImg"
                type="text"
                onChange={onInputChange}
                value={images}
              />
              <button
                type="button"
                className="subirImage"
                onClick={handdleAddImage}
              >
                SUBIR IMAGEN
              </button>
            </div>

            <div className="productView-container_actualImg">
              <h5>Imagenes Actuales</h5>
              {/* Esto puede ser un componente mapeado */}
              <div className="productView-container_actualImgDetail">
                <div className="picture">
                  <img src={product.images} alt="" />
                </div>
                <div>{product.title}</div>
                <button className="buttonProductView">Quitar </button>
              </div>
            </div>
            <div className="containerSubmitButton">
              <button
                type="button"
                className="submitButton"
                onClick={onResetForm}
              >
                Cancelar
              </button>
              <button className="submitButton">Guardar </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
>>>>>>> Stashed changes
}

export default ProductView