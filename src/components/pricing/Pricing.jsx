import React from "react";
import styled from "styled-components";

export default function Pricing() {
  return (
    <PricingContainer id="pricing">
      <h1>Pricing</h1>
    </PricingContainer>
  );
}
const PricingContainer = styled.section`
  padding: 8rem 2rem 2rem;
  height: 100vh;
  background: green;
  h1 {
    display: flex;
    justify-content: center;
  }
`;
