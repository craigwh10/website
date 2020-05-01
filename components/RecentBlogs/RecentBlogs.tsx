import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
//
import useBlogs from "../../container/blogs/useBlogs";

export interface RecentBlogsProps {
  stoppingPoint: number;
}

const RecentBlogs: React.SFC<RecentBlogsProps> = ({ stoppingPoint }) => {
  const { posts, isLoading } = useBlogs();

  if (isLoading) {
    return <p>Loading</p>;
  }

  console.log(posts);
  return (
    <Col>
      <h2>Recent Blogs</h2>
      {posts.map((post, index) => {
        if (index < stoppingPoint) {
          return (
            <p>
              {post.fields.Title}, {post.fields.Date}
            </p>
          );
        } else {
          null;
        }
      })}
      <Link href="/blog">
        <a>See more...</a>
      </Link>
    </Col>
  );
};

export default RecentBlogs;
