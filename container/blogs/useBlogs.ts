import { useEffect, useState } from "react";
import * as types from "../../types";

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

  const [posts, setPosts] = useState<types.posts>([]);
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
