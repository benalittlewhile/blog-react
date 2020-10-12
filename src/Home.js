import React from "react";
const contentful = require("contentful");

export function Home() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const client = contentful.createClient({
      space: "5c81s2y9z1bv",
      accessToken: "l9FKAAZ2viDJwV_dlNaEsHCiQ_0TH3M5GJgbdPNolTE",
    });

    client.getEntries().then((response) => {
      console.log(typeof Object.values(response.items));
      console.log(response.items[0]);
      // console.log(Object.values(response.items));
      setPosts(response.items);
    });
  }, []);
  return (
    <div className="Home center">
      <h1>I'm a homepage</h1>
      <p>Homeskillet</p>
      <p className="post">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
        minus molestiae vel beatae natus eveniet ratione temporibus aperiam
        harum alias officiis assumenda officia quibusdam deleniti eos cupiditate
        dolore doloribus!
      </p>
      <p>this is home.js</p>
      {posts.forEach((post) => (
        <div className="Postbody">
          banana
          <h1>{post.fields.title}</h1>
          <h3>{post.fields.date}</h3>
          <p>{post.fields.postbody}</p>
        </div>
      ))}
    </div>
  );
}
