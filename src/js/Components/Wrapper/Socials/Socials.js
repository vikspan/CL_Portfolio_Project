import React from "react";
import "./_socials.scss";

const Socials = ({ type, items }) => {
  return (
    <div className={type + "__socials"}>
      {
        items.map((item, i) => <a key={i} href={item.url}><img src={item.src} alt={item.alt} /></a>)
      }
    </div>
  )
}

export default Socials;