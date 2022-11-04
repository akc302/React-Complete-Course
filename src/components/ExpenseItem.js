import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React, { Component } from "react";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      {/* passes data using props from A to B component  */}
      <div className="expense-item_description"></div>
      <h2>my first component!</h2>
      <h2>{props.title}</h2>
      <h2>{props.amt}</h2>
      <h2>{props.date.toDateString()}</h2>
      <div className="expense-item__price">100$</div>
    </div>
  );
}

export default ExpenseItem;
