import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./../Dashboard/index";
import Login from "./../Login/index";
import Register from "./../Register/index";
import { Provider } from "react-redux";
import { store } from "../../../config/redux";

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
