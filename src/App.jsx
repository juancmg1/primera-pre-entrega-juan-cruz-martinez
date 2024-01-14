import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CheckOut } from './Componentes/Checkuot/CheckOut';
import Error from './Componentes/Error';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';
import CartProvider from "./Componentes/Context/CartContext";




function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
    <CartProvider>
    <NavBar />
    
    <Routes> 

     <Route path={'/'} element={ <ItemListContainer /> } />
     <Route path={'/category/:id'} element={ <ItemListContainer /> } />

     <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />
     <Route path={"/cart"} element={<Cart/>} />
     <Route path={"/checkout"} element={<CheckOut/>} />
     <Route path={'*'} element={ <Error /> } />

    </Routes>

 </CartProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
