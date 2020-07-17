"use strict";
const pages = ["index", "tolearn", "todo", "banana"];

function Navbar() {
  return (
    <div className="navbar">
      <NavbarElement page="index.html" title="index" />
      <NavbarElement page="tolearn.html" title="tolearn" />
    </div>
  );
}

function NavbarElement(props) {
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

function app() {
  return (
    <div>
      <Navbar />
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
