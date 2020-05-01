import { useEffect, useState } from "react";

const client = require("contentful").createClient({
  space: process.env.spaceID,
  accessToken: process.env.accessToken,
});

const useBlogs = () => {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`[useBlogs] Error upon getting entries.`);
  }

  type posts = Post[];

  interface Post {
    fields: field;
  }

  interface field {
    Date: string;
    Key: string;
    image: string;
    Title: string;
    url: string;
    alt: string;
  }

  const [posts, setPosts] = useState<posts>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }
    getPosts();
    setLoading(false);
  }, []);

  return { posts, isLoading };
};

export default useBlogs;
