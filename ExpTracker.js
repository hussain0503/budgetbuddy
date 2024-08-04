import Homepage from "./Homepage";
import Balance from "./Balance";
import IncExp from "./IncExp";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import { GlobalProvider } from "./GlobalState";
import Footer from "./Footer";

function ExpTracker(){
    return(
<div>
        <GlobalProvider>
<Homepage />
<Balance />
<IncExp />
<TransactionList />
<AddTransaction />

        </GlobalProvider>

        <Footer />
        </div>
    )
}
export default ExpTracker;