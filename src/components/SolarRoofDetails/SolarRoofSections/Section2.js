import React from "react";
import styled from "styled-components";

function Section2() {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <DesignDetail>
        <DesignDetailText>
          <div>
            <span>Design</span>
            <h1>Complement Your Home’s Aesthetic</h1>
          </div>
          <p>
            Install Solar Roof and power your home with a fully integrated solar
            and energy storage system. The glass solar tiles and steel roofing
            tiles look great up close and from the street, complementing your
            home’s natural styling.{" "}
            <a href="#">Schedule a virtual consultation</a> with a Tesla Advisor
            to learn more.
          </p>
        </DesignDetailText>
        <button>Order Now</button>
      </DesignDetail>
    </Container>
  );
}

export default Section2;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ImageContainer = styled.img`
  width: 100vw;
  height: 65vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solar-roof.jpg");
`;
const DesignDetail = styled.div`
  width: 80%;
  margin-top: 20px;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  span {
    padding: 5px 0px;
    margin-left: 1rem;
  }
  h1{
    margin-left:1rem;
    margin-top: 0.4rem;
  }
  p {
    padding-left: 10px;
    line-height: 25px;
    padding-right: 2.1rem;
    width: 65%;
    color: gray;
  }
  a {
    color: gray;
    text-decoration: underline;
  }
  button {
    margin-left: 1rem;
    margin-top: 30px;
    width: 13rem;
    padding: 10px 20px;
    border: 3px solid black;
    border-radius: 3px;
    font-weight: bold;
    background-color:white;
    font-size: 1rem;
    cursor:pointer;
  }
  button:hover {
    background-color: black;
    color: white;
  }
`;
const DesignDetailText =styled.div`
  display:flex;
`
