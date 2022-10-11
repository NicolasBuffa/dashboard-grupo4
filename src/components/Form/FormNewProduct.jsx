import { useRef, useEffect } from "react";

import { useForm } from "../../hooks/useForm";

function FormNewProduct({ product }) {
  let initialForm = {
    title: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    images: [""],
    rating: {
      rate: 0,
      count: 0,
    },
  };
  const {
    formState,
    setFormState,
    onInputChange,
    handdleAddImage,
    handleDecrement,
    handleIncrement,
    handleSubmit,
    handleSubmitNewProduct,
    handdleDelete,
    onResetForm,
    price,
    description,
    title,
    stock,
    images,
  } = useForm(initialForm);

  return (
    <>
      {/* Componente form */}
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
          <div className="productView-container_actualImgDetail">
            <div className="picture">
              <img src={product.images} alt="" />
            </div>
            <div>{product.title}</div>
            <button className="buttonProductView">Quitar </button>
          </div>
        </div>
        <div className="containerSubmitButton">
          <button type="button" className="submitButton" onClick={onResetForm}>
            Cancelar
          </button>
          <button className="submitButton">Guardar </button>
        </div>
      </form>
      {/* Componente form fin */}
    </>
  );
}

export default FormNewProduct;
