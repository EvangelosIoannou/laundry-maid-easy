import React from "react";
import Home from "../components/home/Home";
import styled from "styled-components";
import HowItWorks from "../components/how-it-works/HowItWorks";
import Pricing from "../components/pricing/Pricing";
import About from "../components/about/About";

export default function HomeView() {
  return (
    <HomeViewContainer>
      <Home />
      <About />
      <HowItWorks />
      <Pricing />
    </HomeViewContainer>
  );
}
const HomeViewContainer = styled.div``;
