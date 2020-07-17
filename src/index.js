"use strict";

// import { Navbar } from "./Navbar.js";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as React from "react";
import * as ReactDom from "react-dom";
import { ToLearn } from "./ToLearn.js";
function app() {
  return (
    //   <Router>
    //     <div>
    //       <ul>
    //         <li>
    //           <Link to="/">home</Link>
    //         </li>
    //         <li>
    //           <Link to="/ToLearn">tolearn</Link>
    //         </li>
    //       </ul>
    //       <hr />
    //       <Switch>
    //         <Route exact path="/">
    //           <Home />
    //         </Route>
    //         <Route exact path="ToLearn">
    //           <ToLearn />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
    // );
    <div>
      {/* <Navbar /> */}
      <div className="center">
        <h1>Hello world!!</h1>
        <h1>banana</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
          minus molestiae vel beatae natus eveniet ratione temporibus aperiam
          harum alias officiis assumenda officia quibusdam deleniti eos
          cupiditate dolore doloribus!
        </p>
      </div>
    </div>
  );
}

ReactDOM.render(app(), document.getElementById("root"));
