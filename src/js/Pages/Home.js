import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Header type="header" />
      <Banner />
      <Header type="footer"/>
    </>
  )
}

export default Home;