import React from "react";

const AccountBalance = (props) => {
  return (
    <div className="account-balance">
      <h1>ACCOUNT BALANCE</h1>
      <h3>Credit: {props.credit}</h3>
      <h3>Debit: {props.debit}</h3>
      <h2>Current Balance: {props.balance}</h2>
    </div>
  );
};

export default AccountBalance;
