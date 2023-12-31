import React from 'react'

const ProductCard = ({img,title,price,children}) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{price}</p>
      <div>{children}</div>
    </div>
  )
}

export default ProductCard