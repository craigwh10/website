import React, { useState } from "react";
import { BlogKey, HoverOverBlogKey } from "./BlogKey";
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
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className={value > 0 ? "blog-key-choice" : "blog-key-choice choose-all"}
      onClick={onClick}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!isShown ? (
        <BlogKey choice={choice} value={value} />
      ) : (
        <HoverOverBlogKey choice={choice} value={value} />
      )}
    </div>
  );
};

export default BlogKeyChoice;
