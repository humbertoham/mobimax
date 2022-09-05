import React from "react";

import Banner from "./Banner";
import About from "./About";
import Contact from "./Contact";
import Map from "./Map";
import Section from "./Section";
import Work from "./Work";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Section />
      <Work />
      <Gallery />
      <Contact />
      <Map />
    </>
  );
};

export default Home;
