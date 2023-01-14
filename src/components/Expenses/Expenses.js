import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const onFilterHandler = (enteredFilter) => {
    setFilterYear(enteredFilter);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilter={onFilterHandler} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
