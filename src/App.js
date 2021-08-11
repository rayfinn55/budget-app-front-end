import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";

function App() {
  return (
    <div className="App">
      <Router>
        {[]}
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/transactions">
              <Index />
            </Route>
            <Route path="/transactions/new">
              <New />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
  }
export default App;