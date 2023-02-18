import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const expenses = props.data;
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const expensesFiltered = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filterYear}
      />
      <ExpensesChart expenses={expensesFiltered} />
      <ExpensesList items={expensesFiltered} />
    </div>
  );
}

export default Expenses;
