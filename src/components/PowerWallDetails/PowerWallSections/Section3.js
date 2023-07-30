import React from "react";
import styled from "styled-components";

function Section3() {
  return (
    <Container>
      <TextContainer>
        <div>
          <span>Independence</span>
          <h1>Power Everything</h1>
          <button>Request Callback</button>
        </div>
        <p>
          Powerwall is an integrated battery system that stores your solar
          energy for backup protection, so when the grid goes down your power
          stays on. Your system detects outages and automatically recharges with
          sunlight to keep your appliances running for days.
        </p>
      </TextContainer>
      <VideoContainer>
        <Video autoPlay controls loop muted>
          <source src="./videos/powerWallv1.webm" type="video/mp4" />
        </Video>
        <ToggleDiv>
          <Design>
            <button></button>
            <p>Store solar energy</p>
          </Design>
          <Design>
            <button></button>
            <p>Use your stored energy day or night</p>
          </Design>
          <Design>
            <button></button>
            <p>Or when the power is out during an outage</p>
          </Design>
          <Design>
            <button></button>
            <p>Recharge from sunshine</p>
          </Design>
        </ToggleDiv>
      </VideoContainer>
    </Container>
  );
}

export default Section3;

const Container = styled.div`
padding: 60px 0px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
`;

const TextContainer = styled.div`
  width: 75%;
  margin-top: 30px;
  margin-left: 12vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    button {
      width: 55%;
      margin-top: 20px;
      padding: 8px 40px;
      border-radius: 5px;
      border: 3px solid white;
      background-color: black;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: white;
      color: black;
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
const VideoContainer = styled.div`
  width: 85%;
  height: 85%;
  margin-top: 30px;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative; /* Positioned the video absolutely */
  top: 0;
  left: 0;
`;
const ToggleDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px;
  margin-left: 10vw;
`;
const Design = styled.div`
  width: 95%;
  button {
    width: 88%;
    border: 3px solid gray;
  }
  p {
    text-align: start;
    color: gray;
    padding-right: 50px;
    margin-top: 10px;
  }
  &:hover {
    button {
      width: 95%;
      border: 3px solid #292a2b;
    }
    p {
      text-align: start;
      color: #292a2b;
    }
  }
  cursor: pointer;
`;
