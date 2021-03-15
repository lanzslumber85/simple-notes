import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./../Dashboard/index";
import Login from "./../Login/index";
import Register from "./../Register/index";

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </div>
        </Router>
    );
}

export default App;
