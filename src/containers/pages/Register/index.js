import React from "react";
import "./Register.scss";
import firebase from "../../../config/firebase/index";

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

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                // Signed in
                var user = userCredential.user;
                console.log("user: ", user);
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("errorCode:", errorCode);
                console.log("errorMessage:", errorMessage);
            });
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
                    <button className="btn" onClick={this.handleRegisterSubmit}>
                        Register
                    </button>
                </div>
            </div>
        );
    }
}

export default Register;
