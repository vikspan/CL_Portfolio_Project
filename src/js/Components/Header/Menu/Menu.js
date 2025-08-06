import React, { useEffect, useState } from "react";
import "./_menu.scss";
import menu from "../../../../assets/menu.svg";

const Menu = ({ items }) => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 900) {  // TODO
      setMobile(false);
    }

  }, []);

  const toggleMobile = () => {
    setMobile(prev => !prev);
  }

  return (
    <nav className="menu">
      <img onClick={toggleMobile} src={menu} className="menu__toggle--icon" alt="mobile toggle" />
      <ul style={{visibility: mobile? "visible" : "hidden"}}>
        {items.map((item, i) => (
          <li key={i}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;