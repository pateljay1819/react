import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
    <div>
      {props.product.map((product) => (
        <Product product={product} key={product.name} />  // Ensure key is unique
      ))}
    </div>
  );
}
