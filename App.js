import './App.css';
import { Routes, Route,Link } from 'react-router-dom';
import AboutMe from './AboutMe.js';
import Hpage from './Hpage.js';
import ExpTracker from './ExpTracker.js';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
function App() {

return(
<div className='App'>
<nav>
  <Link to="/"><img src="C:\Users\hussa\OneDrive\Desktop\ExpenseTrackerAppLogo.jpg" alt="React Image" /></Link>
  <Link to="LogIn">LogIn  </Link>
  <Link to="SignUp">SignUp </Link>
  <Link to="/">Homepage  </Link>
  <Link to="/about-me">About Us  </Link>
  <Link to="/ExpTracker">ExpenseTracker</Link>
  </nav> 








<Routes>
  <Route path="Signup" element={<SignUp />} />
  <Route path="LogIn" element={<LogIn />} />
<Route path="/" element={<Hpage />} />
<Route path="/about-me" element={<AboutMe />} />
<Route path="/ExpTracker" element={<ExpTracker />} />
</Routes>



</div>
);
};

export default App;
