import React, { Fragment } from "react";
import "../App.css";
import { FaWindowMinimize, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";

export default function Addtransaction() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = transaction => {
    console.log(transaction);
  };

  return (
    <Fragment>
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
          ref={register({ required: "Enter transaction description" })}
        ></input>
        {errors.description && <p>{errors.description.message}</p>}
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="text"
          ref={register({ required: "Enter amount" })}
        ></input>
        {errors.amount && <p>{errors.amount.message}</p>}
        <button onClick={handleSubmit(onSubmit)} className="submit">
          Add Transaction
        </button>
      </form>
    </Fragment>
  );
}
