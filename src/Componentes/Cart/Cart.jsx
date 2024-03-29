import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import './Cart.css'

import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className='total'>
      <p className='p'>Total: $ {totalPrice()}</p>

      </div>
   
      <Link to="/checkout">
        {' '}
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </>
  );
};

export default Cart;
