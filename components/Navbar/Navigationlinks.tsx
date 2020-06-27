import React from "react";
//
import Link from "next/link";
//
import { NavLink } from "../../types";

interface AllLinks {
  links: NavLink[];
}

const NavigationLinks: React.FC<AllLinks> = ({ links }: AllLinks) => (
  <React.Fragment>
    {links.map((item, index) => (
      <Link key={index} href={item.link} as={item.link}>
        <a className={"NavLink  pullright-desktop"}>{item.content}</a>
      </Link>
    ))}
  </React.Fragment>
);

export default NavigationLinks;
