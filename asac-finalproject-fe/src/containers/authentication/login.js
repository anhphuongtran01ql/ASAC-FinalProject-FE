import React, { Component } from "react";
import "./login.scss";
import ParticleBackground from "../../components/particles";
import { Button } from "bootstrap";

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
            <div className="login-content row">
              <div className="col-12 text-center login-text">Sign In With</div>

              <div className="col-12 social-login">
                <i className="fab fa-google-plus-g google"></i>
                <i className="fab fa-facebook-f facebook"></i>
              </div>

              {/* Login form */}
              <div className="col-12 form-group login-input">
                <label className="label-login">Username</label>
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter your username"
                  />
                </div>
              </div>

              <div className="col-12 form-group login-input">
                <label className="label-login">Password</label>
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Please enter your password"
                  />
                </div>
              </div>

              <div className="col-12 text-end">
                <a href={"#"} style={{ textDecoration: "none", fontSize: "12px", fontWeight: 600 }}>
                  Forgot password?
                </a>
              </div>

              <div className="col-12 form-group">
                <button type="submit" className="btn-login">
                  Login
                </button>
              </div>

              <div className="col-12 text-center">
                <span className="text-other-login">
                  Have not account yet?{" "}
                  <a href={"#"} style={{ textDecoration: "none" }}>
                    Sign Up
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
