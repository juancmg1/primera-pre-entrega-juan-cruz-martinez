import React from 'react';
import { useCartContext } from '../Context/CartContext';
import './ItemCart.css'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
      <div className="itemCart">
        <div className='cart'>
         <img className='img' src={product.img} alt={product.title} />
         <div className='descripcion'>

          <p>Título: {product.title}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio u.: {product.price}</p>
          <p>Subtotal: ${product.quantity * product.price}</p>
          <button onClick={() => removeProduct(product.id)}>Eliminar</button>
         </div>
        </div>
      </div>
    );
};

export default ItemCart;