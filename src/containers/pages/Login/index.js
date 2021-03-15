import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
    render() {
        return (
            <div>
                <p>Login Page</p>
                <button>Go to Register</button>
                <button>Go to Dashboard</button>
            </div>
        );
    }
}

const reduxState = state => {
    return {
        popupProps: state.popup,
    };
};

export default connect(reduxState, null)(Login);
