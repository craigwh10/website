import React from "react";
import * as types from "../../types";

export const filterBlogsByKeys = (blogs: types.posts, filterChoice: string) => {
  return blogs.filter((blog) => {
    return blog.fields.keys.contentTags.includes(filterChoice) === true;
  });
};
