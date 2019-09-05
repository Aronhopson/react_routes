import React from 'react';
import ReactDOM from 'react-dom';

//BrowserRouter => interract with url(history)   Route=> execute whatever the BrowserRouter is gonna pass,,
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom"

//COMPONENT
import Home from "./Component/home";
import Profile from "./Component/profiles";
import Post from "./Component/posts";
import Post_item from "./Component/post_item";
import Life from "./Component/life_cyle"
import Conditional from "./Component/conditional"

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br />
                    <NavLink to="/post"
                    activeStyle= {{color:'red'}}
                    >Post</NavLink><br />
                    <NavLink to={{
                        pathname: "/profile",
                        hash: "#ARON",
                        search: "?pro=true"
                    }}>Profile</NavLink><br />
                    <NavLink to="/life">lifeCycle</NavLink><br />
                    <NavLink to="/conditional">Conditional</NavLink>
                    <hr />
                </header>   
                <Switch>
                    <Route path="/post/:id/:username" component={Post_item} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/post" component={Post} />
                    <Route path="/life" component={Life}/>
                    <Route path="/conditional" component={Conditional}/>
                    <Route path="/" exact component={Home} />
                </Switch>

            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />, document.querySelector("#root")
)