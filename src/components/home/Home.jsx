import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeContainer id="home">
      <div className="left"></div>
      <div className="right">
        <img className="laundry-logo" src="/data/laundry-logo.png" alt="" />
        <h2>Laundry Maid Easy</h2>
        <p>Door-to-door ironing service</p>
        <p>Door-to-door ironing service</p>
      </div>
    </HomeContainer>
  );
}
const HomeContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  .left {
    height: 100%;
    width: 50%;
    position: relative;
    background: center/cover no-repeat url("/data/ironing1.jpg");
  }
  .right {
    height: 100%;
    width: 50%;
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .laundry-logo {
    height: 70vh;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  }
  p {
    font-size: 2rem;
  }
`;
