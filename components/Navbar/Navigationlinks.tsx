import React from "react";
//
import Link from "next/link";
//
import { NavLink } from "../../types";
//
import styles from "./Navbar.module.scss";

interface AllLinks {
  links: NavLink[];
}

const NavigationLinks: React.FC<AllLinks> = ({ links }: AllLinks) => (
  <React.Fragment>
    {links.map((item) => (
      <Link href={item.link}>
        <a className={styles.NavLink}>{item.content}</a>
      </Link>
    ))}
  </React.Fragment>
);

export default NavigationLinks;
