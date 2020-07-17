"use strict";

const pages = ["index", "tolearn", "todo", "banana"];

function Navbar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement(NavbarElement, {
    page: "index.html",
    title: "index"
  }), /*#__PURE__*/React.createElement(NavbarElement, {
    page: "tolearn.html",
    title: "tolearn"
  }));
}

function NavbarElement(props) {
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

function app() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("div", {
    className: "center"
  }, /*#__PURE__*/React.createElement("h1", null, "Hello world!!"), /*#__PURE__*/React.createElement("h1", null, "banana"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!")));
}

ReactDOM.render(app(), document.getElementById("root"));