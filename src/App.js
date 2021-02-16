import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopepage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import Header from "./components/header/header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //----when-log-out-userAuth-becomes-null-----
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div className="">
        <Router>
          <Header />
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
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
