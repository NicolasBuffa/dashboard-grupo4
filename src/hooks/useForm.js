import { useState, useRef } from "react";
import { useParams } from "react-router-dom";

export const useForm = (initialForm) => {
  const [formState, setFormState] = useState(initialForm);
  const images = useRef(null);
  const params = useParams();

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === "price" || name === "stock") {
      setFormState({ ...formState, [name]: Number(value) });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleIncrement = ({ target }) => {
    setFormState({ ...formState, stock: formState.stock + 1 });
  };
  const handleDecrement = ({ target }) => {
    setFormState({ ...formState, stock: formState.stock - 1 });
  };

  const handdleAddImage = ({ target }) => {
    console.log(images);
  };
  const onResetForm = () => {
    setFormState(initialForm);
  };
  const handleSubmitNewProduct = async (ev) => {
    ev.preventDefault();
    fetch("http://localhost:4000/api/product", {
      method: "post",
      body: JSON.stringify({
        ...formState,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    fetch("http://localhost:4000/api/product", {
      method: "PUT",
      body: JSON.stringify({
        ...formState,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  const handdleDelete = async (ev) => {
    ev.preventDefault();
    fetch(`http://localhost:4000/api/product?id=${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  return {
    ...formState,
    formState,
    onInputChange,
    handleSubmit,
    handdleDelete,
    handdleAddImage,
    handleDecrement,
    handleIncrement,
    handleSubmitNewProduct,
    onResetForm,
  };
};
