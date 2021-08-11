import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import form from "./components/form"
import transaction from "./components/transaction"
import transactions from "./components/transactions"

function App() {
  return (
    <div className="App">
      <Router>
        
        <NavBar />
        <main>
          <Switch>
          <Route exact path="/" render={() => <div><h1>Welcome to My Handy Budget App</h1></div>} />
          <Route path ="/transactions/new" component={form}/>
          <Route path ="/transactions/:index"> 
          <transaction /> 
          </Route >
          <Route path="/transactions" component={transactions}>
            <transactions />
          </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
  }
export default App;