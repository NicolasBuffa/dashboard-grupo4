import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../utils/handlers";

export const useForm = (initialForm) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialForm);
  const params = useParams();

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === "price" || name === "stock") {
      setFormState({ ...formState, [name]: Number(value) });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleIncrement = () => {
    setFormState((current) => ({ ...current, stock: formState.stock + 1 }));
  };
  const handleDecrement = () => {
    if (formState.stock >= 0) {
      setFormState({ ...formState, stock: formState.stock - 1 });
    }
  };

  const onResetForm = () => {
    setFormState(initialForm);
    navigate("/products");
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
    }).then((response) =>
      response.status === 201
        ? navigate("/products")
        : console.log(response.status)
    );
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    updateProduct(formState).then((response) =>
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
    handleDecrement,
    handleIncrement,
    handleSubmitNewProduct,
    onResetForm,
  };
};
