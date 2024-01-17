import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list_fallback">검색결과 없음</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense, i) => (
        <ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
