"use strict"; // import { Navbar } from "./Navbar.js";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as React from "react";
import * as ReactDom from "react-dom";
import { ToLearn } from "./ToLearn.js";

function app() {
  return (
    /*#__PURE__*/
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
    React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "center"
    }, /*#__PURE__*/React.createElement("h1", null, "Hello world!!"), /*#__PURE__*/React.createElement("h1", null, "banana"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!")))
  );
}

ReactDOM.render(app(), document.getElementById("root"));