import React, { useContext, useMemo } from "react";

export interface BlogKeyChoiceProps {
  choice: string;
  value: any;
  onClick: () => void;
}

const BlogKeyChoice: React.SFC<BlogKeyChoiceProps> = ({
  choice,
  value,
  onClick,
}) => {
  return (
    <div className="blog-key-choice" onClick={onClick}>
      <span>{choice}</span> {value}
    </div>
  );
};

export default BlogKeyChoice;
