import React from 'react'

<<<<<<< Updated upstream
const ProductNew = () => {
=======
function ProductView() {
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
>>>>>>> Stashed changes
  return (
    <div>ProductNew</div>
  )
}

export default ProductNew