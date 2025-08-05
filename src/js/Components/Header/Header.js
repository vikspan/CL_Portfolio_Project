import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Header = ({type}) => {
  return (
    <div className={type}>
      <Logo type={type + "__logo"}/>
      <Menu items={
        [
          {title: "Home", url: "#"},
          {title: "About", url: "#about"},
          {title: "Tech Stack", url: "#stack"},
          {title: "Projects", url: "#projects"},
          {title: "Contact", url: "#contact"}
        ]
      } />
    </div>
  )
}

export default Header;