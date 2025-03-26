import React from "react";
import styled from "styled-components";
import Card from "../cards/Card";

export default function HowItWorks() {
  return (
    <HowItWorksContainer id="howitworks">
      <h1>How It Works</h1>
      <Card />
    </HowItWorksContainer>
  );
}
const HowItWorksContainer = styled.section`
  padding: 8rem 2rem 2rem;
  height: 100vh;
  background: blue;
  h1 {
    display: flex;
    justify-content: center;
  }
`;
