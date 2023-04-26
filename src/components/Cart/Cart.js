import React from "react";
import classes from './Cart.module.css'
import Button from 'react-bootstrap/Button';
import Modal from '../UI/Modal';
export default function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 1, price: 30 },
          { id: "c1", name: "fff", amount: 1, price: 20 }]         .map((item) => (
        <li>{item.name}          {item.price}</li>
       
      ))}
    </ul>
  );

  return ( 
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}