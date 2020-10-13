import React from "react";
const contentful = require("contentful");

export function Home() {
  const mockEntry = [
    {
      fields: {
        date: "",
        postbody: "",
        title: "",
      },
    },
  ];
  const [posts, setPosts] = React.useState(mockEntry);
  React.useEffect(() => {
    const client = contentful.createClient({
      space: "5c81s2y9z1bv",
      accessToken: "l9FKAAZ2viDJwV_dlNaEsHCiQ_0TH3M5GJgbdPNolTE",
    });

    client.getEntries().then((response) => {
      console.log(typeof response.items);
      console.log(response.items[0].fields);
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
      {posts.map((post) => (
        <div className="Post" key={post.fields.title + post.fields.date}>
          banana
          <h1>{post.fields.title}</h1>
          <h3>{post.fields.date}</h3>
          {/* yes I know this is the wrong way to do this but it works for
          my purposes for the time being and I have sole control of the content
          being injected into it */}
          <div
            className="postbody"
            dangerouslySetInnerHTML={{ __html: post.fields.postbody }}
          />
        </div>
      ))}
    </div>
  );
}
