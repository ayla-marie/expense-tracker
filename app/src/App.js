import React, { Fragment, useState } from "react";
import "./App.css";
import Balance from "./Components/Yourbalance";
import History from "./Components/Transhistory";
import { FaWindowMinimize } from "react-icons/fa";
import "core-js";

function App() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  //function for setting a new transaction desc and amnt
  function onSubmit() {
    if (description === "") {
      alert("please enter a description");
    } else if (amount === "") {
      alert("pleast enter transaction amount");
    } else {
      console.log(transactionData);
      // transHistory.push(transaction);
      setAmount("");
      setDescription("");
    }
  }
  const transactionData = { description, amount };

  return (
    <Fragment>
      <div className="App">
        <h2>Expense Tracker</h2>
        <Balance />
        <History data={transactionData} />
        {/* Add Transaction Component below */}
        <div className="App">
          <h4>
            <p className="icon small">
              <FaWindowMinimize />
            </p>
            Add Transaction
          </h4>
          <div className="form">
            <label htmlFor="description">Description</label>
            <input
              name="description"
              type="text"
              placeholder="Enter text..."
              value={description}
              onChange={e => {
                setDescription(e.currentTarget.value);
              }}
            />
            <label htmlFor="amount">Amount</label>
            <input
              name="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={e => {
                setAmount(e.currentTarget.value);
              }}
            />
            <button className="submit" onClick={onSubmit}>
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
