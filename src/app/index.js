import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router"

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            homeLink: 'Home',
            homeMounted: true
        };
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        let homeComp = "";
        if (this.state.homeMounted) {
            homeComp = (
                <Home
                    name={"Max"}
                    initialAge={27}
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
            );
        }
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"user/:id"} component={User}/>
                    <Route path={"home"} component={Home} />
                </Route>
                <Route path={"home-single"} component={Home}/>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
