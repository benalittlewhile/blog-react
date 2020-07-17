import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// A container for a variable number of navbar elements,
// currently hardcoded but I'm sure there are any number of
// ways I could have this build itself automatically
export function Navbar() {
  return (
    // <div className="navbar">
    //   <NavbarElement page="index.html" title="index" />
    //   <NavbarElement page="tolearn.html" title="tolearn" />
    // </div>

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/index">blog</Link>
          </li>
          <li>
            <Link to="/tolearn">tolearn</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Switch>
        <Route exact path="/index"></Route>
      </Switch>
    </Router>
  );
}

// An individual item (link) in the navbar
// props:
//  page: a string indicating the page this element should link to
//  title: a string containing the text for the link
export function NavbarElement(props) {
  let filename = location.href.split("/").slice(-1);
  console.log(`props.page: ${props.page} filename: ${filename}`);
  //if we're on the page this element represents, flag it as active for
  //styling
  if (props.page == filename) {
    return (
      <a href={props.page} className="active">
        {props.title}
      </a>
    );
  } else {
    return <a href={props.page}>{props.title}</a>;
  }
}
