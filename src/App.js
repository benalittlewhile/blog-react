// need react to use react
import React from "react";
import GitHubLogo from "./GitHub-Mark-Light-64px.png";

// import react-router-dom so I can use it to link different pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// import the components for the "pages" of the app
import { Home } from "./Home.js";
// import { ToLearn } from "./ToLearn.js";
import { Blog } from "./Blog.js";

// make it all pretty
import "./style.css";

function App() {
  return (
    <Router>
      <nav>
        <NavLink
          exact
          to="/"
          // className={(isActive) => (isActive ? "linkActive" : "link")}
        >
          Home
        </NavLink>
        <NavLink exact to="/Blog">
          Blog
        </NavLink>
        <a href="https://github.com/benalittlewhile/dotfiles">Config</a>
        <a className="GHLinkLogo" href="https://github.com/benalittlewhile/">
          <img
            className="GHLinkLogo"
            src={GitHubLogo}
            alt="the Github logo"
          ></img>
        </a>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Blog" component={Blog}></Route>
      </Switch>
    </Router>
  );
}

export default App;
