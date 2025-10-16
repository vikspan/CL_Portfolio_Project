import React from "react";
import "./_section.scss";

const Section = ({type, title, subtitle, children}) => {
  return (
    <section className={"section " + type} id={type}>
      <h2 className="section__title">{title}</h2>
      <p className="section__subtitle">{subtitle}</p>
      {children}
    </section>
  )
}

export default Section