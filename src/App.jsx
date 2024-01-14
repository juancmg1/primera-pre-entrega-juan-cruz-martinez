
import NavBar from './Componentes/NavBar/NavBar'
import './App.css'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Componentes/NavBar/Error'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './Componentes/Context/CartContex'

function App() {
  

  return (
    <>
  <BrowserRouter>
  <CartProvider>

    <NavBar />
  <Routes>
  <Route path={"/"} element={<ItemListContainer />} />
          <Route path={'/categoria/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'/*'} element={<Error />} />
  </Routes>
  </CartProvider>
  
    
    
    
  </BrowserRouter>
 
    
    
      
    </>
  )
}

export default App
