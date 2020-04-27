import React from "react";

interface Props {
  className: string;
}

const Footer: React.SFC<Props> = (props) => {
  return (
    <footer className={props.className}>
      <div className={"footer"}>
        <p>Footer</p>
      </div>
    </footer>
  );
};

export default Footer;
