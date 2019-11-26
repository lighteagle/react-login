import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div
        style={{
          paddingTop: 100,
          paddingLeft: "20%",
          textAlign: "left",
          width: "100%"
        }}
      >
        <form>
          <label htmlFor="email">Email </label>
          <br />
          <input type="text" name="email" placeholder="Your Email *" />
          <br />
          <br />
          <label htmlFor="email">Password </label>
          <br />
          <input type="text" name="password" placeholder="Your Password *" />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
