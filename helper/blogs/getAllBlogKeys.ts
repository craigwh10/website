import useBlogs from "../../container/blogs/useBlogs";
import * as types from "../../types";

type keysAsArray = string[];

const getAllBlogKey = (posts: types.posts) => {
  let keysAsArray: keysAsArray = posts
    .map((post) => post.fields.keys.contentTags)
    .flatMap((key) => key);

  var counts: any = {};

  keysAsArray.length > 0
    ? keysAsArray.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
      })
    : null;

  return counts;
};

export default getAllBlogKey;
