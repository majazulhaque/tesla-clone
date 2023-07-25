import React from "react";
import styled from "styled-components";

function Section3() {
  return (
    <div>
      <Container>
        <DetailContainer>
          <div>
            <span>Energy Storage</span>
            <h1>Protection Against Outages</h1>
            <p>
            Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.
            </p>
          </div>
          <ButtonDiv>
            <OrderNow>Order Now</OrderNow>
            <LearnMore>Learn More</LearnMore>
          </ButtonDiv>
        </DetailContainer>
        <ImageContainer></ImageContainer>
      </Container>
    </div>
  );
}

export default Section3;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const DetailContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  padding: 50px 25px;
  h1 {
    padding: 15px 0px;
  }
  p {
    color: gray;
  }
`;
const ButtonDiv = styled.div`
width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OrderNow = styled.button`
  padding: 8px 120px;
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
const ImageContainer = styled.img`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solarroof2.jpg");
`;
