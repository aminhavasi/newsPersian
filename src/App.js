import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/homePage";
import Register from "./auth/register";
import Login from "../src/auth/login";
function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
}

export default App;
