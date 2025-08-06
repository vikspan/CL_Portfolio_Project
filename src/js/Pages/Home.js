import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Section from "../Components/Section/Section";
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import js from "../../assets/js.svg"
import react from "../../assets/react.svg"
import sass from "../../assets/sass.svg"
import git from "../../assets/git.svg"
import code from "../../assets/code.svg"
import gith from "../../assets/gith.svg"


const Home = () => {
  return (
    <>
      <Header type="header" />
      <Banner />
      <Section type="tech" title="My Tech Stack" subtitle="Technologies I've been working with recently">
        <Socials type="tech" items={[
          { url: "#", src: html, alt: "HTML" },
          { url: "#", src: css, alt: "CSS" },
          { url: "#", src: js, alt: "JavaScript" },
          { url: "#", src: react, alt: "React" },
          { url: "#", src: sass, alt: "Sass" },
          { url: "#", src: git, alt: "Git" },
          { url: "#", src: code, alt: "VS Code" },
          { url: "#", src: gith, alt: "GitHub" }
        ]} />
      </Section>
      <Section type="projects" title="Projects" subtitle="Things I've built so far">
      </Section>
      <Header type="footer" />
    </>
  )
}

export default Home;