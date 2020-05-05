import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
//
import useBlogs from "../../container/blogs/useBlogs";
//
import RecentBlog from "./RecentBlog";

export interface RecentBlogsProps {
  stoppingPoint: number;
  isTitle?: boolean;
}

const RecentBlogs: React.SFC<RecentBlogsProps> = ({
  stoppingPoint,
  isTitle = false,
}) => {
  const { posts, isLoading } = useBlogs();
  console.log(posts);
  if (isLoading) {
    return <p>Loading</p>;
  }

  const BlogTitle: React.SFC = () => (
    <React.Fragment>
      <h2>Recent Blogs</h2>
      <p>Anything I find interesting, methods & guides</p>
    </React.Fragment>
  );

  let conditionalPost = true ? posts : null;

  return (
    <Col className="blog-recents hero">
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
      <div className="mt-2">
        <Link href="/blog">
          <a>See more...</a>
        </Link>
      </div>
    </Col>
  );
};

export default RecentBlogs;
