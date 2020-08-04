import React, { Fragment } from "react";
import "./App.css";
import Balance from "./Components/Yourbalance";
import History from "./Components/Transhistory";
import NewTransaction from "./Components/Addtransaction";

function App() {
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <Balance />
      <History />
      <NewTransaction />
    </div>
  );
}

export default App;
