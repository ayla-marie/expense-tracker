import React from "react";
//import Transaction from "./Transaction";
import "../App.css";
import { FaWindowMinimize, FaTimes } from "react-icons/fa";

function Transhistory(props) {
  const newData = props.data;
  const transHistory = [];
  transHistory.push(newData);

  return (
    <div className="App">
      <h4>
        <p className="icon small">
          <FaWindowMinimize />
        </p>
        History
      </h4>
      <div id="history-list" className="history">
        {/* <Transaction list={transHistory} /> */}
      </div>
    </div>
  );
}

export default Transhistory;
