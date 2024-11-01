import React, { useState } from 'react';
import axios from 'axios';
import style from '../styles/card.module.css';

function Card({ item }) {
  const [cart, setCart] = useState([]);

  const addCart = async () => {
    try {
     
      const response = await axios.get(`http://localhost:3000/users/1`);
      const user = response.data;

     
      const updatedCart = [...user.cart, item];

      
      await axios.patch(`http://localhost:3000/users/1`, {
        ...user,
        cart: updatedCart
      });

     
      setCart(updatedCart);

      console.log("Item added to cart successfully");
    } catch (error) {
      console.error("Error adding item to cart", error);
    }
  };

  return (
    <div className={style.card}>
      <p>{item.name}</p>
      <img src={item.image} alt={item.name} className={style.imge} />
      <p>{item.price}</p>
      <button onClick={addCart}>Add to cart</button>
    </div>
  );
}

export default Card;
