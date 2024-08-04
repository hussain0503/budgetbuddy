import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import { Transaction } from "./Transaction";


export const TransactionList = () => {
  const {transactions}  = useContext (GlobalContext);

    return(
      <div className="transaction-list-container">
      <h3 className="transaction-list-title">History</h3>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

    export default TransactionList;
