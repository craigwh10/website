import React from "react";
import * as types from "../../types";
import { Container } from "react-bootstrap";

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
    <Container>
      <a href={url}>
        <img alt={alt} src={image} />
      </a>
      <div className="text">
        <div className="blog-title animated fadeIn">
          <h2>{title}</h2>
          <h4>
            {date}, by {author}.
          </h4>
        </div>
        <div className="blog-content animated fadeIn">
          <p>{content}</p>
        </div>
      </div>
    </Container>
  );
};

export default BlogPostLayout;
