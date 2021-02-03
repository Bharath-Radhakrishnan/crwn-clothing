import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";
export default function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              console.log("clicked");
              auth.signOut();
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
}
