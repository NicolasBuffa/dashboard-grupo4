import { useState, useEffect } from "react";


function TitleHeaderHome() {
    const url= 'http://localhost:4000/api/user/1'
    const [nombre, setNombre]= useState('');
    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> setNombre(data.firstname))
    })
  return (
    <h1>¡Hola {nombre}!</h1>
    
  )
}

export default TitleHeaderHome