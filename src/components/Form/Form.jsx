import { useRef, useEffect } from "react";

import { useForm } from "..//../hooks/useForm";
import CardImage from "./CardImage";

function Form({ product }) {
  const refImage = useRef();
  const handdleAddImage = ({ target }) => {
    setFormState({
      ...formState,
      images: [...formState.images, refImage.current.value],
    });
  };

  let initialForm = {
    id: "",
    title: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    images: [],
    rating: {
      rate: "",
      count: "",
    },
  };
  const {
    formState,
    setFormState,
    onInputChange,
    handleDecrement,
    handleIncrement,
    handleSubmit,
    onResetForm,
    price,
    description,
    title,
    stock,
  } = useForm(initialForm);

  useEffect(() => {}, [formState]);
  useEffect(() => {
    if (product.id !== null) {
      setFormState({ ...formState, ...product });
    }
  }, [product]);
  return (
    <>
      {/* Componente form */}
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
          min="0"
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
            min={"0"}
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
          <option selected="selected" value="tienda1">
            Olivia Store
          </option>
          <option value="store2">Store 2</option>
          <option value="store3">Store 3</option>
          <option value="store4">Store 4</option>
        </select>
        <h3>Galeria de Imagenes</h3>

        <label>Nueva Imagen</label>
        <div className="containerUploadImages">
          <input
            className="inputForm "
            name="images"
            id="inputImg"
            type="text"
            ref={refImage}
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
          {formState.images.map((image, index) => {
            return (
              <CardImage
                formState={formState}
                setFormState={setFormState}
                image={image}
                index={index}
                key={image + index}
              />
            );
          })}
        </div>
        <div className="containerSubmitButton">
          <button type="button" className="submitButton" onClick={onResetForm}>
            Cancelar
          </button>
          <button className="submitButton">Guardar </button>
        </div>
      </form>
    </>
  );
}

export default Form;
