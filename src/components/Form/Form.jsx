import { useRef, useEffect, useState } from "react";

import { useForm } from "..//../hooks/useForm";
import CardImage from "./CardImage";

function Form({ product }) {
  const showImage2 = product.images;
  const refImage = useRef();
  const [newImage, setNewImage] = useState();
  const [showImage, setShowImage] = useState(product.images);
  const handdleAddImage = ({ target }) => {
    // let aux = formState.images;
    // aux.push(target.value);
    setFormState({
      ...formState,
      images: [refImage.current.value],
    });
  };
  console.log(refImage);
  let initialForm = {
    id: "",
    title: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    images: "",
    rating: {
      rate: "",
      count: "",
    },
  };
  const {
    formState,
    setFormState,
    onInputChange,
    // handdleAddImage,
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
  useEffect(() => {
    if (product.id !== null) {
      setFormState({ ...formState, ...product });
    }
  }, [product]);

  useEffect(() => {
    console.log("meactualice");
    return () => {
      console.log("medesmonte");
    };
  }, [showImage]);

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
            onChange={(e) => {
              setNewImage(e.target.value);
            }}
            // value={newImage}
            ref={newImage}
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
          {showImage2.map((image) => {
            return <CardImage image={image} />;
          })}
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

export default Form;
