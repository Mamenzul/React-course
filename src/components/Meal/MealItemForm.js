import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount.</p>}
      </div>
    </form>
  );
};

export default MealItemForm;
