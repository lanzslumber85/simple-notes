import React from "react";
import { connect } from "react-redux";
import { addDataToAPI, getDataFromAPI } from "../../../config/redux/action";
import "./Dashboard.scss";

class Dashboard extends React.Component {
    state = {
        title: "",
        content: "",
        date: "",
    };

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem("userData"));
        this.props.getNotes(userData.uid);
    }

    handleSaveNotes = () => {
        const { title, content } = this.state;
        const { saveNotes } = this.props;
        const userData = JSON.parse(localStorage.getItem("userData"));

        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userID: userData.uid,
        };

        saveNotes(data);

        console.table(data);
    };

    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value,
        });
    };

    render() {
        const { title, content, date } = this.state;
        return (
            <div className="container">
                <div className="input-form">
                    <input
                        className="input-title"
                        placeholder="title"
                        value={title}
                        onChange={e => this.onInputChange(e, "title")}
                    />
                    <textarea
                        className="input-content"
                        placeholder="content"
                        value={content}
                        onChange={e => this.onInputChange(e, "content")}
                    ></textarea>
                    <button className="save-btn" onClick={this.handleSaveNotes}>
                        Save
                    </button>
                </div>
                <hr />
                <div className="card-content">
                    <p className="title">Title</p>
                    <p className="date">21 Sep 2019</p>
                    <p className="content">Content Notes</p>
                </div>
            </div>
        );
    }
}

const reduxState = state => {
    return { userData: state.user };
};

const reduxDispatch = dispatch => {
    return {
        saveNotes: data => dispatch(addDataToAPI(data)),
        getNotes: data => dispatch(getDataFromAPI(data)),
    };
};

export default connect(reduxState, reduxDispatch)(Dashboard);
