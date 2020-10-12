import React from "react";
const contentful = require("contentful");

export function Blog() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    const client = contentful.createClient({
      space: "<space_id>",
      accessToken: "<content_delivery_api_key>",
    });
    client.getEntries().then((response) => {
      setPost(response);
      console.log(response);
    });
  }, []);

  return (
    <div className="Blog center">
      <h1>I'm a banana</h1>
      <p>Big Banana</p>
      <p>{post}</p>
      <h1>fff</h1>
    </div>
  );
}
