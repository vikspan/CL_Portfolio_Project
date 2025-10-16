import React from "react";
import Menu from "../Components/Wrapper/Menu/Menu";

const MainMenu = () => {
  return (
    <Menu type="header__nav"
      items={
        [
          { title: "Home", url: "#" },
          { title: "Tech Stack", url: "#tech" },
          { title: "Projects", url: "#projects" },
          { title: "Contact", url: "#contact" }
        ]
      } />
  )
}

export default MainMenu;