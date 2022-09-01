import React, { Component } from "react";
import "./login.scss";
import ParticleBackground from "../../components/particles";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
          <ParticleBackground />
        <div className="login-background">
          <div className="login-container">
            <div className="login-content">
              <h1>Hello World!</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
