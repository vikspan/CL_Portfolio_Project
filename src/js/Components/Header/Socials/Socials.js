import React from "react";
import gh from "../../../../assets/github.svg";
import tw from "../../../../assets/twitter.svg";
import ln from "../../../../assets/linkedin.svg";
import "./_socials.scss";

const Socials = ({type}) => {
  return (
    <div className={type + "__socials"}>
      <a href="#"><img src={gh} alt="GitHub Logo" /></a>
      <a href="#"><img src={tw} alt="Twitter Logo" /></a>
      <a href="#"><img src={ln} alt="LinekIn Logo" /></a>
    </div>
  )
}

export default Socials;