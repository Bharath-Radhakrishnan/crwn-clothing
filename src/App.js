import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopepage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";

import Header from "./components/header/header";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div className="">
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/shop" component={ShopPage}></Route>
            <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
            <Route exact path="/" component={Homepage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
