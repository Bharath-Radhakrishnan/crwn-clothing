import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.scss";
class SignIn extends Component {
  constructor(props) {
    super(props);
    // this.handleChange;
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log("error", e);
    }
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>SignIn with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name={"email"}
            type="text"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            name={"password"}
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
