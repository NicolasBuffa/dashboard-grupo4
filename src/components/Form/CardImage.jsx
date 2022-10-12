import React from "react";

function CardImage({ image, index, formState, setFormState }) {
  const handleRemoveImage = (image) => {
    let arr = formState.images;
    try {
      let arrFiltrada = arr.filter(function (e) {
        return e != image;
      });
      setFormState({
        ...formState,
        images: [...formState.images, arrFiltrada],
      });
    } catch (error) {
      console(error);
    }
  };
  return (
    <div className="productView-container_actualImgDetail">
      <div className="picture">
        <p>{image}</p>
        {/* <img src={image} alt="" /> */}
      </div>

      <button
        onClick={(e) => {
          handleRemoveImage(image, e);
        }}
        className="buttonProductView"
      >
        Quitar{" "}
      </button>
    </div>
  );
}

export default CardImage;
