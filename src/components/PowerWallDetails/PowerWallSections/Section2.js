import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

function Section2() {
  return (
    <FullContainer>
      <UpperContainer>
        <ItemText>
          <h1
            style={{
              fontSize: "3rem",
              color: "white",
              fontFamily: "initial",
              fontWeight: "500",
            }}
          >
            Powerwall
          </h1>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <DetailContainer>
              <Solar>
                {/* <AddToPhotosIcon /> */}
                <img
                  src="/images/powerwall01.svg"
                  alt=""
                  style={{ color: "white" }}
                />
                <p>Backup Energy Storage</p>
              </Solar>
              <Warrenty>
                <h2>24/7</h2>
                <p>Outage Protection</p>
              </Warrenty>
              <Outrage>
                {/* <h2>24/7</h2> */}
                <img
                  src="/images/powerwall02.svg"
                  alt=""
                  style={{ color: "white" }}
                />
                <p>Energy Independence</p>
              </Outrage>
            </DetailContainer>
          </ButtonGroup>
        </Buttons>
      </UpperContainer>
      <LowerContainer>
        <div>
          <span>Security</span>
          <h1>Backup Protection</h1>
          <button>Order Powerwall</button>
        </div>
        <p>
        Powerwall is an integrated battery system that stores your solar 
        energy for backup protection, so when the grid goes down your power
         stays on. Your system detects outages and automatically recharges 
         with sunlight to keep your appliances running for days.
        </p>
      </LowerContainer>
    </FullContainer>
  );
}

export default Section2;
const FullContainer = styled.div`
  width: 100vw;
  height: 100vh;
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;
const UpperContainer = styled.div`
  width: 100vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/images/powerWall2.jpg");
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; /* Added positioning */
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  position: relative; /* Added positioning */
  z-index: 1; /* Set a higher z-index to place text above the video */
  p {
    color: white;
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  width: 35vw;
  text-align: center;
`;

const DetailContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const Solar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    width: 8rem;
    margin-top: 7px;
    font-size: 0.8rem;
  }
  cursor: pointer;
`;
const Warrenty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    width: 5rem;
    margin-top: 7px;
    font-size: 0.8rem;
  }
  cursor: pointer;
`;
const Outrage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    margin: 8px 0px;
  }
  p {
    width: 6rem;
    margin-top: 7px;
    font-size: 0.8rem;
  }
  cursor: pointer;
`;

const LowerContainer = styled.div`
  width: 75%;
  margin-top: 30px;
  margin-left: 12vw;
  display: flex;
  align-items: center;
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
