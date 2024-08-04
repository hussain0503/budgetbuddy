import {GlobalContext} from "./GlobalState.js";
import { useContext } from "react";

function Incexp(){
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item=> item > 0)
    .reduce((acc,item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc,item) => (acc += item), 0) * -1
    ).toFixed(2);
    return(
        <div className="incexp-container">
        <div className="incexp-item">
            <h4 className="incexp-title">Income</h4>
            <p className="incexp-amount income">${income}</p>
        </div>
        <div className="incexp-item">
            <h4 className="incexp-title">Expenses</h4>
            <p className="incexp-amount expense">${expense}</p>
        </div>
    </div>
);
}

export default Incexp;