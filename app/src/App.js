import React, { Fragment, useState } from "react";
import "./App.css";
import Balance from "./Components/Yourbalance";
import History from "./Components/Transhistory";
import { FaWindowMinimize } from "react-icons/fa";
import "core-js";

function App() {
  const [transactions, setTransactions] = useState([]);
  console.log(transactions);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Fragment>
      <div className="App">
        <h2>Expense Tracker</h2>
        <Balance />
        <History transactions={transactions} />
        {/* Add Transaction below */}
        <h4>
          <p className="icon small">
            <FaWindowMinimize />
          </p>
          Add Transaction
        </h4>
        <form id="new-transaction-container" className="form">
          <label htmlFor="description">Description</label>
          <p id="key" className="pop-out">
            Use - to indicate expenses
          </p>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Enter text..."
            value={description}
            onChange={e => {
              setDescription(e.currentTarget.value);
            }}
          />
          <p className="pop-up error"></p>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={e => {
              setAmount(e.currentTarget.value);
            }}
          />
          <p className="pop-up error"></p>
          <input type="submit" className="submit" value="Add" />
        </form>
      </div>
    </Fragment>
  );
}

export default App;
