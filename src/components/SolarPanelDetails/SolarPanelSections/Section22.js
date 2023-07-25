import React from "react";
import styled from "styled-components";

function Section22() {
  return (
    <div>
      <Container>
      <ImageContainer></ImageContainer>
        <DetailContainer>
          <div>
            <span>Design</span>
            <h1>Sleek and Durable</h1>
            <p>
            Our solar panels are low-profile and durable — quietly converting
             sunlight to energy for decades to come. Integrated hardware and 
             simple design achieve this by securing the panels close to your 
             roof and to each other for a minimalist aesthetic. <a href="#">Schedule a
              virtual consultation</a> with a Tesla Advisor to learn more.
            </p>
          </div>
            <OrderNow>Order Now</OrderNow>
        </DetailContainer>
      </Container>
    </div>
  );
}

export default Section22;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const ImageContainer = styled.img`
  width: 75%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solarPane1.jpg");
`;
const DetailContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:space-between;
  padding: 50px 35px;
  h1 {
    padding: 15px 0px;
  }
  p {
    color: gray;
    a{
      color:gray;
      text-decoration:underline;
    }
  }
`;
const OrderNow = styled.button`
  padding: 8px 60px;
  border: 3px solid black;
  border-radius: 5px;
  margin-bottom:5px;
  background-color:white;
  font-weight:bold;
  &:hover {
    background-color: black;
    color: white;
  }
  cursor:pointer;
`;
const LearnMore = styled.button`
  padding: 8px 120px;
  border:none;
  background-color:white;
  font-weight:bold;
  cursor:pointer;
`;
