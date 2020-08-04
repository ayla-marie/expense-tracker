import React, { Fragment } from "react";
import "../App.css";

function Addtransaction() {
  return (
    <div id="new-transaction-container" class="form">
      <label for="transaction-name">Description:</label>
      <input id="new-transaction-name" type="text"></input>
      <label for="amount">Amount</label>
      <input id="amount" type="text"></input>
      <button>Add Transaction</button>
    </div>
  );
}

export default Addtransaction;
