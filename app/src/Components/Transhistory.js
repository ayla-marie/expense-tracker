import React from "react";
//import Transaction from "./Transaction";
import "../App.css";
import { FaWindowMinimize } from "react-icons/fa";

function Transhistory(props) {
  const TransactionList = [];

  function AllTransactions() {
    console.log(props.entry);
    TransactionList.push(props.entry);
    if (TransactionList.length < 1) {
      return null;
    } else {
      return TransactionList;
    }
  }

  return (
    <div className="App">
      <h4>
        <p className="icon small">
          <FaWindowMinimize />
        </p>
        History
      </h4>
      <div id="history-list" className="history">
        <AllTransactions />
      </div>
    </div>
  );
}

export default Transhistory;
