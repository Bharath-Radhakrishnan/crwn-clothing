import React, { Component } from "react";
import "./sign-up.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password doesnt match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name={"displayName"}
            type="text"
            value={displayName}
            label="Display Name"
            handleChange={this.handleChange}
          />
          <FormInput
            name={"email"}
            type="text"
            value={email}
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            name={"password"}
            type="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
          />
          <FormInput
            name={"confirmPassword"}
            type="password"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign Up </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
