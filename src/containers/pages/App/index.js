import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./../Dashboard/index";
import Login from "./../Login/index";
import Register from "./../Register/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
    popup: false,
    isLogin: false,
};

const reducer = (state = initialState, action) => {
    if (action.type === "CHANGE_POPUP") {
        return {
            ...state,
            popup: action.value,
        };
    }

    if (action.type === "CHANGE_ISLOGIN") {
        return {
            ...state,
            isLogin: action.value,
        };
    }

    return state;
};

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
