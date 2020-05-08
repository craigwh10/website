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
    <div
      className={value > 0 ? "blog-key-choice" : "blog-key-choice choose-all"}
      onClick={onClick}
    >
      <span>{choice}</span> {value > 0 ? value : null}
    </div>
  );
};

export default BlogKeyChoice;
