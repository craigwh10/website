import { useEffect, useState } from "react";
import Head from "next/head";
import Post from "../components/Post/Post";
import useBlogs from "../container/blogs/useBlogs";

const client = require("contentful").createClient({
  space: process.env.spaceID,
  accessToken: process.env.accessToken,
});

function HomePage() {
  const { isLoading, posts } = useBlogs();

  console.log(posts);

  return (
    <>
      {posts.length > 0
        ? posts.map((p) => (
            <Post
              alt={p.fields.alt}
              date={p.fields.Date}
              key={p.fields.Title}
              image={p.fields.image}
              title={p.fields.Title}
              url={p.fields.url}
            />
          ))
        : null}
    </>
  );
}

export default HomePage;
