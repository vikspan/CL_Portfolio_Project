import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import "./_header.scss";
import Socials from "./Socials/Socials";

const Header = ({ type }) => {
  return (
    <div className={type}>
      <Logo type={type + "__logo"} />
      <div className={type + "__nav"}>
        <Menu type={type + "__nav"}
          items={
            [
              { title: "Home", url: "#" },
              { title: "About", url: "#about" },
              { title: "Tech Stack", url: "#stack" },
              { title: "Projects", url: "#projects" },
              { title: "Contact", url: "#contact" }
            ]
          } />
        <Socials type={type + "__nav"} />
      </div>
    </div>
  )
}

export default Header;