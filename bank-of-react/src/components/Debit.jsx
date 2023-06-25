import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Debit(props) {
  let initialDebit = props.debit;
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const date = new Date().toLocaleDateString();

  const navigate = useNavigate();
  const navigateToHome = () => {
    // Navigate back to the home page
    return navigate("/");
  };

  function addForm(event) {
    event.preventDefault();

    const newDebit = {
      date,
      description,
      amount,
    };

    props.handleDebit(newDebit);
    setDescription("");
    setAmount("");
  }

  const loadHistory = () => {
    return props.debitHistory.map((debit, index) => {
      return (
        <div key={index} className="element">
          <p>Date: {debit.date}</p>
          <p>Description: {debit.description}</p>
          <p>Amount: {debit.amount}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Debit Page</h1>
      <button onClick={navigateToHome}>Return to Home Page</button>

      <form onSubmit={addForm} className="form">
        <label>Enter a description</label>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>Enter an Amount</label>
        <input
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Debit History</h2>
      <div className="history-container">
        <div className="initial-debt">
          <p>Date: {date}</p>
          <p>Description: Initial Debt</p>
          <p>Amount: {initialDebit}</p>
        </div>
        {loadHistory()}
      </div>
    </div>
  );
}

export default Debit;