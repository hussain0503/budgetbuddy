import React , {useContext} from "react";
import {GlobalContext} from "./GlobalState.js";

export const Transaction= ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext);
   const sign = transaction.amount < 0 ? '-' : '+';
   
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
{transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="= tbtn" onClick={() => deleteTransaction(transaction.id)}>x</button></li>

    )
}