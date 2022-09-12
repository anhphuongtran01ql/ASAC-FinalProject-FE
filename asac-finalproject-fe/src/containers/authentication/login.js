import React, { Component } from "react";
import "./login.scss";
import ParticleBackground from "../../components/particles";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleOnChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handleOnChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    console.log(this.state);
  };

  render() {
    return (
      <>
        <ParticleBackground />
        <div className="login-background">
          <div className="login-container">
            <div className="login-content row">
              <div className="col-12 text-center login-text">Sign In</div>

              <div className="col-12 login-social">
                <div class="d-grid gap-2">
                  <button class="btn btn-outline-secondary" type="button">
                    <span class="input-group login-group-icon">
                      <img
                        class="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google icon"
                      />
                      Sign in with Google
                    </span>
                  </button>
                  <button class="btn btn-outline-secondary" type="button">
                    <span class="input-group login-group-icon">
                      <i class="fab fa-facebook-square facebook"></i>
                      Sign in with Facebook
                    </span>
                  </button>
                </div>
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
                    value={this.state.username}
                    onChange={(event) => {
                      this.handleOnChangeUsername(event);
                    }}
                  />
                </div>
              </div>

              <div className="col-12 form-group login-input">
                <label className="label-login">
                  Password
                  <a className="forgot-password" href={"#"}>
                    Forgot password?
                  </a>
                </label>
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={(event) => {
                      this.handleOnChangePassword(event);
                    }}
                  />
                </div>
              </div>

              <div className="col-12 form-group">
                <button
                  type="submit"
                  className="btn-login"
                  onClick={(event) => {
                    this.handleLogin(event);
                  }}
                >
                  Login
                </button>
              </div>

              <div className="col-12 text-center">
                <span className="text-other-login">
                  Have not account yet?{" "}
                  <a className="text-other-login" href={"#"}>
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
