import React, { Fragment, useState } from "react";
import "./App.css";
import YourBalance from "./Components/Yourbalance";
import Transhistory from "./Components/Transhistory";
import { FaWindowMinimize } from "react-icons/fa";
import "core-js";

function App() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  const transactionData = { description, amount };

  //function for setting a new transaction desc and amnt
  function onSubmit() {
    if (description === "") {
      alert("please enter a description");
    } else if (amount === "") {
      alert("please enter transaction amount");
    } else {
      data.push(transactionData);
      setData(data);
      setAmount("");
      setDescription("");
    }
  }

  return (
    <Fragment>
      <div className="App">
        <h2>Expense Tracker</h2>
        <YourBalance />
        <Transhistory entries={data} />
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
