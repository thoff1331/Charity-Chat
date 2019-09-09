import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleLoginClick = e => {
    return (
      <div className="login-form">
        <input />
        <label>username</label>
        <input />
        <label>password</label>
      </div>
    );
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password).catch(err => {
      console.log(err);
      alert("invalid username or password");
    });
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="login-form">
        <h3 className="login-title">Login</h3>
        <div className="login-input">
          <input placeholder="Username" />
          <input placeholder="Password" />
        </div>
        <h4 className="forgot-password">Forgot Password?</h4>
      </div>
    );
  }
}

export default Login;
