import React from "react";
const contentful = require("contentful");

export function Blog() {
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

    client
      .getEntries()
      .then((response) => response.items)
      .then((items) =>
        items.sort((a, b) =>
          Date.parse(a.fields.date) > Date.parse(b.fields.date) ? -1 : 1
        )
      )
      .then((itemsSorted) => setPosts(itemsSorted));
  }, []);

  return (
    <div className="center">
      {posts.map((post) => (
        <div className="post" key={post.fields.title + post.fields.date}>
          <h2>{post.fields.title}</h2>
          <h4>{post.fields.date}</h4>
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
