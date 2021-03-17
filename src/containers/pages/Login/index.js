import React from "react";
import { connect } from "react-redux";
import Button from "./../../../components/atoms/Button/index";
import { loginUser } from "./../../../config/redux/action/index";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
    };

    handleChangeText = e => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleLoginSubmit = async () => {
        const { email, password } = this.state;
        const { history } = this.props;
        const res = await this.props
            .loginUser({ email, password })
            .catch(err => err);
        if (res) {
            console.log("Login Success...", res);
            localStorage.setItem("userData", JSON.stringify(res));
            this.setState({ email: "", password: "" });
            history.push("/");
        } else {
            console.log("Login failed...");
        }
    };

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input
                        className="input"
                        id="email"
                        type="email"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleChangeText}
                    ></input>
                    <input
                        className="input"
                        id="password"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleChangeText}
                    ></input>

                    <Button
                        onClick={this.handleLoginSubmit}
                        title="Login"
                        loading={this.props.isLoading}
                    />
                </div>
            </div>
        );
    }
}

const reduxState = state => {
    return { isLoading: state.isLoadingWillBeTrigger };
};

const reduxDispatch = dispatch => {
    return { loginUser: data => dispatch(loginUser(data)) };
};

export default connect(reduxState, reduxDispatch)(Login);
