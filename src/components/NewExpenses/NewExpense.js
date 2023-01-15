import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const clickHandler = () => {setShowForm(true)};

  const cancelButton = () => {
    setShowForm(false);
  };
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && <button onClick={clickHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={cancelButton}
        />
      )}
    </div>
  );
};
export default NewExpense;
