import React from 'react';
import Hero from "../comp/HomePageComp/Hero";
import Specials from "../comp/HomePageComp/Specials";
import Testimonials from "../comp//HomePageComp/Testimonials";
import About from "../comp//HomePageComp/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default Home;