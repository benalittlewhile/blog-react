import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // A container for a variable number of navbar elements,
// currently hardcoded but I'm sure there are any number of
// ways I could have this build itself automatically

export function Navbar() {
  return (
    /*#__PURE__*/
    // <div className="navbar">
    //   <NavbarElement page="index.html" title="index" />
    //   <NavbarElement page="tolearn.html" title="tolearn" />
    // </div>
    React.createElement(Router, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
      to: "/index"
    }, "blog")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
      to: "/tolearn"
    }, "tolearn")))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
      exact: true,
      path: "/index"
    })))
  );
} // An individual item (link) in the navbar
// props:
//  page: a string indicating the page this element should link to
//  title: a string containing the text for the link

export function NavbarElement(props) {
  let filename = location.href.split("/").slice(-1);
  console.log(`props.page: ${props.page} filename: ${filename}`); //if we're on the page this element represents, flag it as active for
  //styling

  if (props.page == filename) {
    return /*#__PURE__*/React.createElement("a", {
      href: props.page,
      className: "active"
    }, props.title);
  } else {
    return /*#__PURE__*/React.createElement("a", {
      href: props.page
    }, props.title);
  }
}