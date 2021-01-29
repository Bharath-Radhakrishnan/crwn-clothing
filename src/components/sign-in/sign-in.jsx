import React, { Component } from "react";
import FormInput from "../form-input/form-input";
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
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
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
