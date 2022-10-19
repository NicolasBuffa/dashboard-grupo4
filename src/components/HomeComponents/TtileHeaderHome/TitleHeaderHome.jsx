import { useState, useEffect } from "react";

function TitleHeaderHome() {
  const url = "http://localhost:4000/api/user/1";
  const [nombre, setNombre] = useState("Olivia");

  return <h2>¡Hola {nombre}!</h2>;
}

export default TitleHeaderHome;
