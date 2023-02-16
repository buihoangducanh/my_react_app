import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseHandler = (expense) => {
    const newExpense = {
      id: Math.random(),
      ...expense,
    };
    props.onAddExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
