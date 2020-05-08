import React from "react";

export interface BlogKeyProps {
  choice: string;
  value: number;
}

export const BlogKey: React.SFC<BlogKeyProps> = ({ choice, value }) => {
  return (
    <React.Fragment>
      {choice} {value > 0 ? <span>{value}</span> : null}
    </React.Fragment>
  );
};

export const HoverOverBlogKey: React.SFC<BlogKeyProps> = ({
  choice,
  value,
}) => {
  if (choice == "All") {
    return <div className="animated fadeIn">Click to see all Blogs</div>;
  }
  return (
    <div className="animated fadeIn">Click to filter blogs by {choice}</div>
  );
};
