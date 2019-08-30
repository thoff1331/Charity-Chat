import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

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
    return <h1>Charity-Chat</h1>;
  }
}

export default Home;
