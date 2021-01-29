import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopepage";
import Header from "./components/header/header";
function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
