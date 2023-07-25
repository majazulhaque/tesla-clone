import React from "react";
import styled from "styled-components";

function Section5() {
  return (
    <Container>
      <VideoContainer>
        <Video controls autoPlay loop muted>
          <source src="./videos/solarPanelv4.mp4" type="video/mp4" />
        </Video>
        </VideoContainer>
      <DetailContainer>
        <div>
          <span>Power On</span>
          <h1>Order and Installation</h1>
          <button>Order Now</button>
        </div>
        <p>
          From permitting to powering on, we’ll take care of everything. After
          you order, we’ll gather remote aerial imagery of your home, design
          your system, take care of any necessary permits and schedule your
          installation. <a href="#">Chat with a Tesla Advisor</a> or{" "}
          <a href="#">request a call</a> to learn more.
        </p>
      </DetailContainer>
    </Container>
  );
}

export default Section5;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoContainer = styled.div`
width: 100vw;
height: 75vh;
`
const Video = styled.video`
  width: 100vw;
  height: 75vh;
  object-fit: cover;
  position: relative; /* Positioned the video absolutely */
  top: 0;
  left: 0;
`;
const DetailContainer = styled.div`
  width: 75%;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    button {
      width: 55%;
      margin-top: 20px;
      padding: 8px 40px;
      border-radius: 5px;
      background-color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: black;
      color: white;
    }
  }
  p {
    margin: 0px 50px;
    a {
      color: gray;
      text-decoration: underline;
    }
  }
`;
