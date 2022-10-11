import { Link } from "react-router-dom";
import addImg from "../../assets/add.png";
import useWindowWidth from "../../hooks/useWindowWidth";
import "./AddProductButton.css";

export default function AddProductMobileButton({ inputSearchActive }) {
  const windowWidth = useWindowWidth();
  return (
    <Link
      to={"/products/new"}
      id="addProductBtn"
      style={inputSearchActive ? { display: "none" } : { display: "block" }}
    >
      {windowWidth > 576 ? (
        "Agregar producto"
      ) : (
        <div className="iconContainer">
          <img src={addImg} alt="add Product" className="icon" />
        </div>
      )}
    </Link>
  );
}
