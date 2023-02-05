import classes from "./Checkout.module.css";
import { useRef } from "react";

const isEmpty = value => value === '';
const isFiveChars = value => value.length >= 1;

const validation = objValues => {
    console.log(Object.values(objValues))
    const mapped = Object.values(objValues).map(value => isEmpty(value) && isFiveChars(value));
    console.log(mapped);
    return !mapped.includes(false);
};
const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredstreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredData = {name: enteredName, street: enteredstreet, postal: enteredPostal};
    if(validation(enteredData)){
        console.log(enteredData);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input ref={nameRef} type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} type="text" id="postal"></input>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
