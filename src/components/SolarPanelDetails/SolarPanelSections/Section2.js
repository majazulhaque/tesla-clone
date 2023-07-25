import React from "react";
import styled from "styled-components";

function Section2() {
  return (
    <div>
      <Container>
        <DetailContainer>
          <div>
            <span>Savings</span>
            <h1>Electricity For Less</h1>
            <p>
            Use solar energy to power your home and reduce your dependence on
             the grid. Purchase solar at the lowest price of any national
              provider with <a href="#">Tesla's price match guarantee</a> and take control of 
              your monthly electricity bill. <a href="#">Schedule a virtual consultation</a>
               with a Tesla Advisor to learn more.
            </p>
          </div>
          <ButtonDiv>
            <OrderNow>See Your Savings</OrderNow>
            <LearnMore>Schedule a Consultation</LearnMore>
          </ButtonDiv>
        </DetailContainer>
        <VideoContainer>
        <Video controls autoPlay loop muted>
          <source src="./videos/solarPanelv2.webm" type="video/mp4" />
        </Video>
        </VideoContainer>
      </Container>
    </div>
  );
}

export default Section2;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const VideoContainer = styled.div`
width: 70%;
height: 100vh;
`
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative; /* Positioned the video absolutely */
  top: 0;
  left: 0;
`;
const DetailContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  padding: 50px 30px;
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
const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-image: url("/images/solarroof2.jpg");
`;
