import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const onAddToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <span className={classes.description}>{props.description}</span>
        <br></br>
        <span className={classes.price}>${props.price}</span>
      </div>
      <MealItemForm onAddToCart={onAddToCartHandler} id={props.id} />
    </li>
  );
};
export default MealItem;
