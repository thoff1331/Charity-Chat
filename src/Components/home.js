import React, { Component } from "react";
import axios from "axios";
import Login from "../Components/login";

class Home extends Component {
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
      <div className="title-buttons">
        <h1>Charity-Chat</h1>
        <div>
          <button onClick={<Login />} className="home-button">
            Login
          </button>
          <button className="home-button">Sign-Up</button>
          <button className="home-button">Settings</button>
        </div>
      </div>
    );
  }
}

export default Home;
