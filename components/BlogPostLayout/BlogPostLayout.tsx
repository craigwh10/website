import React from "react";

interface Props {
  alt?: string;
  date: string;
  image?: string;
  title: string;
  id?: string;
  url?: string;
  content: string;
  author: string;
  key?: string;
}

const BlogPostLayout: React.SFC<Props> = ({
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
