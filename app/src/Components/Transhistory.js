import React, { Fragment } from "react";
import "../App.css";
import { FaWindowMinimize, FaTimes } from "react-icons/fa";

function Transhistory() {
  return (
    <Fragment>
      <h4>
        <p className="icon small">
          <FaWindowMinimize />
        </p>
        History
      </h4>
      <div id="history-list" className="history"></div>
    </Fragment>
  );
}

export default Transhistory;
