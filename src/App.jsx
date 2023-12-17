
import NavBar from './Componentes/NavBar/NavBar'
import './App.css'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ProductCard from './Componentes/NavBar/ProductCard'
import Contador from './Componentes/NavBar/Contador'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Componentes/NavBar/Error'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
    <>
  <BrowserRouter>
    <NavBar />
  <Routes>
  <Route path={"/"} element={<ItemListContainer />} />
          <Route path={'/categoria/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'/*'} element={<Error />} />
  </Routes>
  
    
    
    <ProductCard title='producto 1' price={950.000} img=''>
      <button>Comprar ya</button>
    </ProductCard>
  </BrowserRouter>
    <Contador />
    
    
      
    </>
  )
}

export default App
