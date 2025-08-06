import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import "./_header.scss";
import Socials from "./Socials/Socials";
import gh from "../../../assets/github.svg";
import tw from "../../../assets/twitter.svg";
import ln from "../../../assets/linkedin.svg";

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
        <Socials type={type + "__nav"} items={[
          {url: "#", src: gh, alt: "GitHub"},
          {url: "#", src: tw, alt: "Twitter"},
          {url: "#", src: ln, alt: "LinkedIn"}
        ]} />
      </div>
    </div>
  )
}

export default Header;