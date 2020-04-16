import React from "react";
//
import Link from "next/link";

export interface Props {}

const Navlinks: React.SFC<Props> = () => {
  return (
    <Link href="/">
      <a>Hi</a>
    </Link>
  );
};

export default Navlinks;
