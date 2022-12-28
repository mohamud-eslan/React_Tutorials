import React from 'react'

function products  ({ img, name, desc, price})  {
  return (
    <div>
    <img src={img} alt="products" />
      <h4>{name}</h4>
      <p>{desc}</p>
      <h4>{price}</h4>
    </div>
  );
}

export default products