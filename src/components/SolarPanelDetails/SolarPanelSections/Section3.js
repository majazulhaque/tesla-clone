import React from "react";
import styled from "styled-components";

function Section3() {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <DesignDetail>
        <DesignDetailText>
          <div>
            <span>Powerwall</span>
            <h1>Home Battery Backup</h1>
          </div>
          <p>
            Your Powerwall can be bundled with solar, allowing you to generate
            clean energy and store it for use anytime—at night or during an
            outage.
          </p>
        </DesignDetailText>
        <ButtonDiv>
          <button>Order Now</button>
        </ButtonDiv>
      </DesignDetail>
    </Container>
  );
}

export default Section3;
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
  background-image: url("/images/solarPanel4.jpg");
  outline: 3px solid black;
  outline-offset: -2px;
  margin-left: -100px;
`;
const DesignDetail = styled.div`
  width: 80%;
  margin-top: 20px;
  padding: 25px 0px;
  display: flex;
  flex-direction: column;
  
`;
const DesignDetailText = styled.div`
  display: flex;
  span {
    padding: 5px 0px;
    margin-left: 1rem;
  }
  h1 {
    margin-left: 1rem;
    margin-top: 0.4rem;
  }
  p {
    padding-left: 70px;
    line-height: 25px;
    padding-right: 2.1rem;
    width: 65%;
    color: gray;
  }
  a {
    color: gray;
    text-decoration: underline;
  }
`;
const ButtonDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  button {
    margin-left: 1rem;
    margin-top: 30px;
    width: 13rem;
    padding: 10px 20px;
    border: 3px solid black;
    border-radius: 3px;
    font-weight: bold;
    background-color: white;
    font-size: 1rem;
    cursor: pointer;
  }
  button:hover {
    background-color: black;
    color: white;
  }
`
const LearnMore = styled.p`
  padding: 8px 50px;
`
