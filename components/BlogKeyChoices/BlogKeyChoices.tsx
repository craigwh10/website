import React from "react";
import getAllBlogKeys from "../../helper/blogs/getAllBlogKeys";
//
import useBlog from "../../container/blogs/useBlogs";
import BlogKeyChoice from "./BlogKeyChoice";
import { Col } from "react-bootstrap";
import { filterContext } from "../../helper/ChoiceContext/ChoiceContext";

const BlogKeyChoices: React.FC = () => {
  const { posts, isLoading } = useBlog();
  const { filterChoice, setFilterChoice } = React.useContext(filterContext);

  const blogKeys = getAllBlogKeys(posts);

  return (
    <Col className="hero">
      <BlogKeyChoice
        choice="All"
        value={-1}
        onClick={() => {
          setFilterChoice("All");
        }}
      />
      {Object.keys(blogKeys).map((choice, index) => {
        const value = blogKeys[choice];

        return (
          <BlogKeyChoice
            key={`BlogKeyChoice_${index}`}
            choice={choice}
            value={value}
            onClick={() => {
              setFilterChoice(choice);
            }}
          />
        );
      })}
    </Col>
  );
};

export default BlogKeyChoices;
