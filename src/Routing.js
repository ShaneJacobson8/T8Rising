import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import WhatWeDo from "./components/WhatWeDo";
import Help from "./components/Help";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import About from "./components/About";

function Routing() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/WhatWeDo" component={WhatWeDo} />
                <Route path="/Help" component={Help} />
                <Route path="/Donate" component={Donate} />
                <Route path="/Contact" component={Contact} />
                <Route path="/About" component={About} />

            </Switch>
        </Router>
    )
}
export default Routing;