import React from "react";
import styled from "styled-components";
import { howItWorksData } from "../../../public/data/howitworks/howItWorksData";

export default function Card() {
  console.log(howItWorksData);
  return (
    <CardContainer>
      {howItWorksData.map((project) => (
        <div className="card" key={project.id}>
          <div className="top">
            <img src={project.imageSrc} alt={project.alt} />
          </div>
          <div className="bottom">
            <h4>{project.title}</h4>
          </div>
        </div>
      ))}
    </CardContainer>
  );
}
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  .card {
    height: 400px;
    width: 300px;
    background: rgba(0, 0, 0, 0.7);
    border: 3px solid rgba(238, 238, 238, 0.2);
    border-radius: 2rem;
    margin: 2rem;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      border: 3px solid var(--main-color);
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 0 50px var(--main-color);
    }
  }
  .top {
    /* background: url(/data/films/batmanbegins.jpg) center/cover no-repeat green; */
    height: 90%;
    border-radius: 2rem 2rem 0 0;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: inherit;
      filter: grayscale(20%) contrast(80%);
    }
  }
  .bottom {
    background-color: red;
    height: 10%;
    border-radius: 0 0 2rem 2rem;
  }
`;
