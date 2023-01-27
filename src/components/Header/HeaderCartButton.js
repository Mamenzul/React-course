import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [bumpButton, setBumpButton] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${bumpButton ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumpButton(true);
    const timer = setTimeout(() => {
      setBumpButton(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.cartButtonClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
