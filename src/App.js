import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import Home from "./Pages/Home";
import Page from "./Pages/Page";
import Account from "./Pages/Account";
import Documentation from "./Pages/Documentation";

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pages">
            <Page />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/documentaion">
            <Documentation />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
