import React from "react";
import styled from "styled-components";

function Section23() {
  return (
    <Container>
      <FirstContainer>
        <FirstContainerText>
          <h1>Clean Aesthetic</h1>
          <p>
            All-black panels and proprietary hardware keep the array close to
            your roof — no bulky racks, no large gaps.
          </p>
        </FirstContainerText>
        <FirstContainerImage></FirstContainerImage>
        <FirstContainerDetail>
          <Conceal>
            <h2>Concealed Edge</h2>
            <p>A front skirt helps hide hardware and the panel edge</p>
          </Conceal>
          <Visible>
            <h2>No Visible Grid</h2>
            <p>
              Panels and hardware are all-black for a uniform monochromatic look
            </p>
          </Visible>
          <Profile>
            <h2>Low-Profile</h2>
            <p>Rail-free mounting keeps panels close to your roof</p>
          </Profile>
        </FirstContainerDetail>
      </FirstContainer>
      <SecondContainer>
        <SecondContainerText>
          <h1>Maximum Durability</h1>
          <p>
            Solar panels are designed with the durability of both the overall
            array and your roof in mind. Simple installation and proprietary
            hardware allow minimum impact to your roof.
          </p>
        </SecondContainerText>
        <SecondVideoContainer>
          <Video controls autoPlay loop muted>
            <source src="./videos/solarPanelv3.webm" type="video/mp4" />
          </Video>
          <VideoText>
            <h3>Less Impact</h3>
            <p>
              Rail-free mounting and interlocking brackets fasten panels
              together for one solid array.
            </p>
          </VideoText>
        </SecondVideoContainer>
      </SecondContainer>
      <ThirdContainer>
        <ThirdImageContainer>
          <ImageText>
            <h3>Less Impact</h3>
            <p>
              Rail-free mounting and interlocking brackets fasten panels
              together for one solid array.
            </p>
          </ImageText>
          <ImageContainer></ImageContainer>
        </ThirdImageContainer>
      </ThirdContainer>
    </Container>
  );
}

export default Section23;

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  // align-items:center;
  padding: 60px 0px;
  background-color: black;
  color: white;
`;
const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FirstContainerText = styled.div`
  width: 50%;
  padding: 10px;
`;
const FirstContainerImage = styled.img`
  width: 70%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solarPanel2.jpg");
  outline: 3px solid black;
  outline-offset: -2px;
  margin-left: -100px;
`;
const FirstContainerDetail = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  h2 {
    margin-bottom: 5px;
  }
`;
const Conceal = styled.div`
  width: 31%;
`;
const Visible = styled.div`
  width: 31%;
`;
const Profile = styled.div`
  width: 31%;
`;
const SecondContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SecondContainerText = styled.div`
  width: 60%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
const SecondVideoContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Video = styled.video`
  width: 50%;
  height: 50%;
  object-fit: cover;
  position: relative; /* Positioned the video absolutely */
  top: 0;
  left: 0;
`;
const VideoText = styled.div`
  width: 40%;
`;

const ThirdContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ThirdImageContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImageContainer = styled.img`
  width: 50%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solarPanel3.jpg");
  outline: 3px solid black;
  outline-offset: -2px;
  margin-left: -100px;
`;
const ImageText = styled.div`
  width: 40%;
`;
