import "./ProductNew.css";

import { useForm } from "../../../hooks/useForm";
import { useGetOneProduct } from "../../../hooks/useGetOneProduct";

import { useParams } from "react-router-dom";

import HeaderContent from "../../../components/Header/HeaderContent/HeaderContent";
import Header from "../../../components/Header/Header";
function ProductNew() {
  const params = useParams();
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
          <form onSubmit={handleSubmitNewProduct} action="submit">
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
}

export default ProductNew;
