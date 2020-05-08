import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
// Hooks
import useBlogs from "../../container/blogs/useBlogs";
// Components
import RecentBlog from "./RecentBlog";
// Context
import { filterContext } from "../../helper/ChoiceContext/ChoiceContext";
// Helpers
import { filterBlogsByKeys } from "../../helper/blogs/filterBlogsByKey";

export interface RecentBlogsProps {
  stoppingPoint: number;
  isConditional?: boolean;
  isTitle?: boolean;
  filterTitle?: boolean;
}

const RecentBlogs: React.SFC<RecentBlogsProps> = ({
  stoppingPoint,
  isTitle = false,
  isConditional = false,
  filterTitle = false,
}) => {
  const { posts, isLoading } = useBlogs();
  const { filterChoice } = React.useContext(filterContext);

  if (isLoading) {
    return <p>Loading</p>;
  }

  const BlogTitle: React.SFC = () => (
    <React.Fragment>
      <h2>Recent Blogs</h2>
      <p>Anything I find interesting, methods & guides</p>
    </React.Fragment>
  );

  const FilterTitle: React.SFC = () => (
    <React.Fragment>
      <h2>Showing {filterChoice} blogs</h2>
    </React.Fragment>
  );

  let conditionalPost =
    isConditional && filterChoice != "" && filterChoice != "All"
      ? filterBlogsByKeys(posts, filterChoice)
      : posts;

  return (
    <Col
      className={
        "blog-recents hero " + (isConditional ? "conditionalrecentblog" : null)
      }
    >
      {filterTitle && filterChoice.length > 0 ? (
        <FilterTitle />
      ) : isConditional ? (
        <h2>Showing All blogs</h2>
      ) : null}
      {isTitle ? <BlogTitle /> : null}
      {posts.length > 0
        ? conditionalPost.map((post, index) => {
            if (index < stoppingPoint) {
              return (
                <Link href={"/blog/" + post.fields.Title}>
                  <a href="">
                    <RecentBlog
                      key={index}
                      title={post.fields.Title}
                      date={post.fields.Date}
                    />
                  </a>
                </Link>
              );
            } else {
              null;
            }
          })
        : null}
      {!isConditional ? (
        <div className="mt-2">
          <Link href="/blog">
            <a>See more...</a>
          </Link>
        </div>
      ) : null}
    </Col>
  );
};

export default RecentBlogs;
