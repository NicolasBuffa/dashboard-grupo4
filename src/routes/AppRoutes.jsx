import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import ProductList from '../pages/Products/ProductsList/ProductsList.jsx';
import ProductNew from '../pages/Products/ProductNew/ProductNew';
import ProductView from '../pages/Products/ProductView/ProductView.jsx';


import React from 'react'

const AppRoutes = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/products/:id' element={<ProductView/>}/>
      <Route path='/products/new' element= {<ProductNew/>}/> 
      <Route path='/*' element={'Error 404, No se encontro la pagina'}/>

    </Routes>

  </BrowserRouter>
  )
}

export default AppRoutes


//    🏠 Página de Inicio (Home)
// /products    📦 Página de productos (ProductsList)
// /products/:id    📦 Página de un producto (ProductView)
// /products/new    📦 Página para agregar un producto