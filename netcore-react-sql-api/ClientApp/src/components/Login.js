import React, { Component } from "react";

import PasswordInput2 from "./PasswordInput2";

export class Login extends Component {
  static displayName = Login.name;

  render() {
    return (
      <form id="Form1" method="post">
        <PasswordInput2 />
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}
