import React,{useContext} from "react";
import CartContext from "../../store/Cart_context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
const cartabc = useContext(CartContext);

  const addToCartHanler =(amount) =>{
       cartabc.addItem({
        id :props.id,
        name:props.name,
        amount:amount,
        price:props.price,
       });
  }   
  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.discription}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div className={classes.btn}>
        <MealItemForm  onAddToCart={addToCartHanler}/> {/* add to card button is put on there */}
      </div>
    </li>
  );
}
