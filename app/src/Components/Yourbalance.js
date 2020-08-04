import React, { Fragment } from "react";
import "../App.css";

function Yourbalance() {
  return (
    <Fragment>
      <h4>
        <p className="icon">$</p>
        Your Balance
      </h4>
      <div id="balance-container" className="balance">
        <h1>$000.00</h1>
        <div id="income-expense" className="grid balance">
          <div id="income">
            <label htmlFor="total-income">Income</label>
            <h3 id="total-income">$0.00</h3>
          </div>
          <div id="expense">
            <label htmlFor="total-expense">Expense</label>
            <h3 id="total-expense">$0.00</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Yourbalance;
