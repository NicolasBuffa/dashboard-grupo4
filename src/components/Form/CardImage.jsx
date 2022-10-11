import React from "react";

function CardImage({ image }) {
  return (
    <div key={image + 1} className="productView-container_actualImgDetail">
      <div className="picture">
        <img src={image} alt="" />
      </div>

      <button className="buttonProductView">Quitar </button>
    </div>
  );
}

export default CardImage;
