import React from "react";
import "./Register.scss";
import Button from "../../../components/atoms/Button";
import { connect } from "react-redux";
import { registerUserIntoFirebase } from "../../../config/redux/action";

class Register extends React.Component {
    state = {
        email: "",
        password: "",
    };

    handleChangeText = e => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleRegisterSubmit = () => {
        const { email, password } = this.state;
        this.props.registerUser({ email, password });
    };

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input
                        className="input"
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={this.handleChangeText}
                    ></input>
                    <input
                        className="input"
                        id="password"
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChangeText}
                    ></input>

                    <Button
                        onClick={this.handleRegisterSubmit}
                        title="Register"
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
    return { registerUser: data => dispatch(registerUserIntoFirebase(data)) };
};
export default connect(reduxState, reduxDispatch)(Register);
