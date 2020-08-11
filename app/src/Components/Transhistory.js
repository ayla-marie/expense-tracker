import React from "react";
//import Transaction from "./Transaction";
import "../App.css";
import { FaWindowMinimize, FaTimes } from "react-icons/fa";

function Transhistory({ entries }) {
  return (
    <div className="App">
      <h4>
        <p className="icon small">
          <FaWindowMinimize />
        </p>
        History
      </h4>
      <div id="history-list" className="history">
        {entries.map((entry, count) => (
          <div key={count} className="output">
            <FaTimes className="ghost-icon" />
            <span className="item">
              {entry.description} <i className="right">${entry.amount}</i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transhistory;
