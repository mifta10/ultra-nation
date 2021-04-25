import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  let totalPopulation = 0;
  let totalArea = 0;

  for (let i = 0; i < cart.length; i++) {
    const country = cart[i];
    totalArea = totalArea + country.area;
    
  }

  for (let i = 0; i < cart.length; i++) {
    const country = cart[i];
    totalPopulation = totalPopulation + country.population;
    
  }
  return (
    <div>
      <h4>Total Area: {totalArea}</h4>
      <h4>Total Population: {totalPopulation}</h4>
    </div>
  );
};

export default Cart;