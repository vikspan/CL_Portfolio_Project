import React from "react";
import Logo from "./Logo/Logo";

const Header = ({type}) => {
  return (
    <div className={type}>
      <Logo type={type + "__logo"}/>
    </div>
  )
}

export default Header;