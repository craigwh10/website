import React from "react";

export interface RecentBlogProps {
  title: string;
  date: string;
}

const RecentBlog: React.SFC<RecentBlogProps> = ({ title, date }) => {
  return (
    <div className={"recentblog"}>
      <p>
        <b>{title}</b>
        <span>{date}</span>
      </p>
    </div>
  );
};

export default RecentBlog;
