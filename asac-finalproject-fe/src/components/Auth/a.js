import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { userService } from "../../_services/user.service";
import { history } from "../../_helpers/history";
import { connect } from "react-redux";
import { changeloggedIn } from "../../_actions/user.actions";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginSubmitted: false,
        };
        this.doLogin = this.doLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.logout();
    }
    handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    async doLogin(event) {
        event.preventDefault();
        this.setState({ loginSubmitted: true });
        const { email, password } = this.state;
        userService.login(email, password).then(
            (res) => {
                if (res.success) {
                    if (res.data.id === 0) {
                        localStorage.removeItem("userDetails");
                        this.clearLoginForm();
                    } else {
                        localStorage.setItem("userDetails", JSON.stringify(res.data));
                        this.props.setLoggedIn(true, res.data);
                        this.clearLoginForm();
                        history.push("/dashboard");
                    }
                } else {
                    localStorage.removeItem("userDetails");
                    this.clearLoginForm();
                }
            },
            (error) => {
                localStorage.removeItem("userDetails");
                this.clearLoginForm();
            }
        );
    }
    clearLoginForm = () => {
        this.setState({
            email: "",
            password: "",
        });
    };
    logout() {
        localStorage.clear();
        this.props.setLoggedIn(false, {});
    }
    render() {
        const { email, password } = this.state;
        return (
            <div>
                <Fragment>
                    <form className="nav" onSubmit={this.doLogin}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <div>
                            <label htmlFor="inputEmail" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="inputEmail"
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder="Email address"
                                value={email}
                            />
                        </div>
                        <div>
                            <label htmlFor="inputPassword" className="sr-only">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="inputPassword"
                                className="form-control"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={password}
                            />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">
                            Sign in
                        </button>
                    </form>
                </Fragment>
            </div>
        );
    }
}
const mapStoreToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: (isLoggedIn, user) => {
            dispatch(changeloggedIn(isLoggedIn, user));
        },
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(Login));