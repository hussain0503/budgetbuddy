import { useState, useContext } from "react";
import { GlobalContext } from "./GlobalState";

function AddTransaction(){
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return(
        <>
        
      <div>  <h3>Add New Transaction</h3>
<form onSubmit={onSubmit}>
        <label>Text</label><br/>
        <input type="text" 
        value={text} 
        onChange={(e) =>setText(e.target.value)} 
        placeholder="Enter Text.." 
        className="type1"/><br></br>

       <br/>
        <label>Amount  <br />
        (negative - Expense, Positive - Income)</label><br/>
        <input type="number" 
        value = {amount} 
        onChange = {(e) => setAmount(e.target.value)} 
        placeholder="Enter Amount.." 
        className="type1"/><br></br>

        <br></br><button className="transac-btn">Add Transaction</button>
    
    </form>
    </div>
    
    </>
    )
}
export default AddTransaction;