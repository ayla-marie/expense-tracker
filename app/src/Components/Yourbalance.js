import React, { Fragment } from "react";
import "../App.css";

function Yourbalance() {
  return (
    <div id="balance-container" class="balance">
      <h4>Your Balance</h4>
      <h1>$000.00</h1>
      <div id="income-expense" class="grid balance">
        Income | Expense
      </div>
    </div>
  );
}
export default Yourbalance;
