import React from "react";
import * as types from "../../types";

const BlogPostLayout: React.SFC<types.displayedBlog> = ({
  alt,
  date,
  image,
  title,
  id,
  url,
  content,
  author,
  key,
}) => {
  return (
    <div className="container">
      <a href={url}>
        <img alt={alt} src={image} />
      </a>
      <div className="text">
        <h2>{title}</h2>
        <h4>
          {date}, by {author}
        </h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogPostLayout;
