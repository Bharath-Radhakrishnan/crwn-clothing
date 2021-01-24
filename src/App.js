import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";

const HatsPage = (props) => {
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  );
};
function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/hats" component={HatsPage}></Route>
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
