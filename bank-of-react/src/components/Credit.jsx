import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Credit(props) {
  const initialCredit = props.initialCredit;
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

    const newCredit = {
      date,
      description,
      amount,
    };

    props.handleCredit(newCredit);

    setDescription("");
    setAmount("");
  }

  const loadHistory = () => {
    return props.creditHistory.map((credit, index) => {
      return (
        <div key={index} className="element">
          <p>Date: {credit.date}</p>
          <p>Description: {credit.description}</p>
          <p>Amount: {credit.amount}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Credit Page</h1>
      <button onClick={navigateToHome}>Return to Home Page</button>

      {props.currentBalance}

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

      <h2>Credit History</h2>
      <div className="history-container">
        {loadHistory()}
        <div className="initial-credit">
          <p>Date: {date}</p>
          <p>Description: Initial Credit</p>
          <p>Amount: {initialCredit}</p>
        </div>
      </div>
    </div>
  );
}
export default Credit;
