import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import Debit from "./Debit";
import Credit from "./Credit";
import AccountBalance from "./AccountBalance";
import NavBar from "./NavBar/NavBar";

function AppComponent() {
  const [credit, setCredit] = useState(0);
  const [debit, setDebit] = useState(0);
  const [balance, setBalance] = useState(0);
  const [debitHistory, setDebitHistory] = useState([]);
  const [creditHistory, setCreditHistory] = useState([]);
  const [initialDebit, setInitialDebit] = useState(0);
  const [initialCredit, setInitialCredit] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        let creditNum = await axios.get(
          "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits"
        );
        setCredit(creditNum.data);
        setInitialCredit(creditNum.data);

        let debitNum = await axios.get(
          "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits"
        );
        setDebit(debitNum.data);
        setInitialDebit(debitNum.data);

        setBalance(creditNum.data - debitNum.data);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  const handleDebit = (newDebit) => {
    setDebit(Number(debit) + Number(newDebit.amount));
    setBalance(balance - newDebit.amount);
    setDebitHistory([newDebit, ...debitHistory]);
  };

  function handleCredit(newCredit) {
    setCredit(credit + newCredit.amount);
    setBalance(balance - newCredit.amount);
    setCreditHistory([newCredit, ...creditHistory]);
  }

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <NavBar />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currentBalance={
                  <AccountBalance
                    credit={credit}
                    debit={debit}
                    balance={balance}
                  />
                }
              />
            }
          />
          <Route
            path="/debit"
            element={
              <Debit
                debit={debit}
                debitHistory={debitHistory}
                handleDebit={handleDebit}
                initialDebit={initialDebit}
                currentBalance={
                  <AccountBalance
                    credit={credit}
                    debit={debit}
                    balance={balance}
                  />
                }
              />
            }
          />
          <Route
            path="/credit"
            element={
              <Credit
                credit={credit}
                creditHistory={creditHistory}
                handleCredit={handleCredit}
                initialCredit={initialCredit}
                currentBalance={
                  <AccountBalance
                    credit={credit}
                    debit={debit}
                    balance={balance}
                  />
                }
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default AppComponent;
