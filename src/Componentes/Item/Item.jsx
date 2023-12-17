import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({item}) => {
  return (
    <Link to={'/item/'+ item.id}className='text-decoration-none'>
    <div className='container'>
        <div  className='card border border-0'>
            <img src={item.imagen} className='card-img-top' alt={item.nombre}/>
            <div className='card-body text-center'>
                <p children='card-text'>{item.nombre}</p>
                <p>${item.precio}</p>
                <button>Comprar</button>
               

            </div>
        </div>

    </div>
    </Link>
  )
}

export default Item