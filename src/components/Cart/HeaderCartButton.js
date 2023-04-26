import React, { useContext } from "react";

import Cartcontext from "../../store/Cart_context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
export default function HeaderCartButton(props) {
 
 const cartabc = useContext(Cartcontext);
 const numberOfCartItems = cartabc.items.reduce((currentNumber ,item) => {
  return currentNumber + item.amount;

 } , 0  );
 
 
  return (
   
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
   
  );
}
