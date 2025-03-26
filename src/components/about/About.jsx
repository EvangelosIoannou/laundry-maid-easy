import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <AboutContainer id="about">
      <h1>About Us</h1>
    </AboutContainer>
  );
}
const AboutContainer = styled.section`
  padding: 8rem 2rem 2rem;
  height: 100vh;
  background: purple;
  h1 {
    display: flex;
    justify-content: center;
  }
`;
