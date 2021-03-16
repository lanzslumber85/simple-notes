import React from "react";
import { connect } from "react-redux";
import { getAction } from "./../../../config/redux/action/index";

class Login extends React.Component {
    changeUser = () => {
        const { changeUsername } = this.props;
        return changeUsername();
    };

    render() {
        const { userName } = this.props;
        return (
            <div>
                <p>Login Page {userName}</p>
                <button onClick={this.changeUser}>Display Username</button>
                <button>Go to Dashboard</button>
            </div>
        );
    }
}

const reduxState = state => {
    return { userName: state.user };
};

const reduxDispatch = dispatch => {
    return { changeUsername: () => dispatch(getAction()) };
};

export default connect(reduxState, reduxDispatch)(Login);
