import React, { Fragment } from "react";
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
        const { notes } = this.props;

        console.log("notes: ", notes);
        console.log("date: ", date);
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

                {notes.length > 0 ? (
                    <Fragment>
                        {notes.map(note => {
                            return (
                                <div key={note.id} className="card-content">
                                    <p className="title">{note.data.title}</p>
                                    <p className="date">{note.data.date}</p>
                                    <p className="content">
                                        {note.data.content}
                                    </p>
                                </div>
                            );
                        })}
                    </Fragment>
                ) : null}
            </div>
        );
    }
}

const reduxState = state => {
    return { userData: state.user, notes: state.notes };
};

const reduxDispatch = dispatch => {
    return {
        saveNotes: data => dispatch(addDataToAPI(data)),
        getNotes: data => dispatch(getDataFromAPI(data)),
    };
};

export default connect(reduxState, reduxDispatch)(Dashboard);
