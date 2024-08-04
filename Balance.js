import { useContext } from "react";
import {GlobalContext} from "./GlobalState.js";
function Balance(){
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    
    const total = amounts.reduce((acc,item) =>(acc += item), 0).toFixed(2);
    

    return(
        <div className="balance-container">
        <h4 className="balance-title">Balance</h4>
        <h1 className="balance-amount">${total}</h1>
    </div>
    )
}
export default Balance;