import React from "react";
import styled from "styled-components";

function Section9() {
  return (
    <Container>
      <ContainerDiv>
        <h1>Transform Your Roof</h1>
        <button>Order Now</button>
        <p>Schedule a Virtual Consultation</p>
        <a href="#">Get Updates</a>
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

export default Section9;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
const ContainerDiv = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 30px;
  }
  button {
    width: 100%;
    padding: 10px 60px;
    border: 3.1px solid white;
    background-color: black;
    color: white;
    font-size: 1.1rem;
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
    background-color: #2f3030;
    border-radius: 3px;
    color: white;
    font-size: 1.1rem;
    font-weight: bolder;
    padding: 10px 50px;
    cursor: pointer;
  }
  p:hover {
    background-color: #3b4040;
    transform: ease-in;
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
