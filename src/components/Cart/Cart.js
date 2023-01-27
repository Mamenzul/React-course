import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = ctx.totalAmount.toFixed(2);
  const hasItems = ctx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem({...item,amount:1});
  };
  const cartItemsMap = ctx.items.map((item) => {
    return (
      <CartItem
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
      ></CartItem>
    );
  });
  return (
    <Modal closeCart={props.closeCart}>
      <div className={classes["cart-items"]}>
        <ul>{cartItemsMap}</ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
