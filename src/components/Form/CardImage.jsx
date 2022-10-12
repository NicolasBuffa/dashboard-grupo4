import React from "react";

function CardImage({ image }) {
  return (
    <div className="productView-container_actualImgDetail">
      <div className="picture">
        {/* <p>{image}</p> */}
        {/* <img src={image} alt="" /> */}
      </div>

      <button className="buttonProductView">Quitar </button>
    </div>
  );
}

export default CardImage;
