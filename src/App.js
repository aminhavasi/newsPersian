import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/homePage";
import Register from "./auth/register";
import Login from "../src/auth/login";
import RecoveryPassword from "./auth/recoveryPassword";
import Reset from "./auth/reset";
function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/recovery" component={RecoveryPassword} />
                <Route path="/reset/:token" component={Reset} />
            </Switch>
        </div>
    );
}

export default App;
