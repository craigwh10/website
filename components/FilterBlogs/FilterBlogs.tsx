import React from "react";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

export interface FilteredBlogsProps {}

const FilteredBlogs: React.SFC<FilteredBlogsProps> = () => {
  return <RecentBlogs />;
};

export default FilteredBlogs;
