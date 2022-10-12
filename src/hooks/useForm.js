import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const useForm = (initialForm) => {
  const navigate = useNavigate();
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
    if (formState.stock >= 0) {
      setFormState({ ...formState, stock: formState.stock - 1 });
    }
  };

  const handdleAddImage = ({ target }) => {
    // let aux = formState.images;
    // aux.push(target.value);
    setFormState({ ...formState, images: [...formState.images, target.value] });
  };

  const handleRemoveImage = (index) => {
    let aux = formState.images;
    aux.splice(index, 1);
    setFormState({ ...formState, images: aux });
  };
  const onResetForm = () => {
    setFormState(initialForm);
  };
  const handleSubmitNewProduct = async (ev) => {
    ev.preventDefault();

    fetch("http://localhost:4000/api/product", {
      method: "POST",
      body: JSON.stringify({
        ...formState,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((response) =>{return response.status})
        .catch((error) => { console.error(error); });
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
      // .then((response) => response.json())
      // .then((json) => console.log(json))
      .then((response) =>
        response.status === 200
          ? navigate("/products")
          : console.log(response.status)
      );
  };
  const handdleDelete = async (ev) => {
    ev.preventDefault();
    fetch(`http://localhost:4000/api/product?id=${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) =>
      response.status === 200
        ? navigate("/products")
        : console.log(response.status)
    );
  };
  return {
    ...formState,
    formState,
    setFormState,
    onInputChange,
    handleSubmit,
    handdleDelete,
    handdleAddImage,
    handleRemoveImage,
    handleDecrement,
    handleIncrement,
    handleSubmitNewProduct,
    onResetForm,
  };
};
