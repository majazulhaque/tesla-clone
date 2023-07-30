import React from "react";
import styled from "styled-components";

function Section6() {
  return (
    <Container>
      <ContainerDiv>
        <h1>Power Everything</h1>
        <p>Order now or talk to a Tesla Advisor if you ave any questins</p>
        <button>Order Powerwall</button>
        <button>Chat with Energy Advisor</button>
        <a href="#">Get Energy Updates</a>
      </ContainerDiv>
      <Footer>
        <p>Tesla © 2023</p>
        <p>Privacy & Legal</p>
        <p>Vehicle Recalls</p>
        <p>Contact</p>
        <p>News</p>
        <p>Get Updates</p>
        <p>Locations</p>
      </Footer>
    </Container>
  );
}

export default Section6;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding:15px;
  color: white;
`;
const ContainerDiv = styled.div`
  height: 80%;
  width: 25%;
  text-align:center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 30px;
  }
  button {
    width: 70%;
    padding: 10px 30px;
    border: 3.1px solid white;
    background-color: black;
    color: white;
    font-size: 1rem;
    font-weight: bolder;
    margin-bottom: 15px;
    border-radius: 3px;
    cursor: pointer;
  }
  button:hover {
    background-color: white;
    color: black;
  }
  a {
    color: white;
    text-decoration: underline;
    margin-top: 25px;
  }
  p {
    padding-bottom: 10px;
  }
`;
const Footer = styled.div`
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #ccdede;
  p{
    cursor:pointer;
  }
`;
