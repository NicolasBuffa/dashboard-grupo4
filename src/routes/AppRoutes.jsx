import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import ProductList from '../pages/Products/ProductsList/ProductsList.jsx';
import ProductNew from '../pages/Products/ProductNew/ProductNew';
import ProductView from '../pages/Products/ProductView/ProductView.jsx';
import Tienda from '../pages/Tienda/Tienda';

import React from 'react'

const AppRoutes = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/products/:id' element={<ProductView/>}/>
      <Route path='/products/new' element= {<ProductNew/>}/> 
      <Route path='/tiendas' element= {<Tienda/>}/> 
      <Route path='/tiendas/new' element= {<Tienda/>}/> 

      <Route path='/*' element={'Error 404, No se encontro la pagina'}/> {/*llama a product view por ser parametrico */}

    </Routes>

  </BrowserRouter>
  )
}

export default AppRoutes


