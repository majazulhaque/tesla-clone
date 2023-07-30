import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

function Section4() {
  return (
    <FullContainer>
      <LowerContainer>
        <div>
          <span>Design</span>
          <h1>Modern and Compact</h1>
          <p>
            With easy installation and a minimalist design, Powerwall
            complements a variety of home styles and solar systems. The compact,
            all-in-one construction features versatile mounting options for
            indoor or outdoor spaces.{" "}
            <a href="#">Chat with an energy advisor</a> to ask any questions
            about Tesla Powerwall.
          </p>
        </div>
        <button>Order Powerwall</button>
      </LowerContainer>
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
                  src="/images/protected.svg"
                  alt=""
                  style={{ color: "white" }}
                />
                <p>Child and pet friendly with no exposed wires or hot ventse</p>
              </Solar>
              <Warrenty>
                <h2>10x</h2>
                <p>Stack up to 10 Powerwalls together to meet your needs</p>
              </Warrenty>
              <Outrage>
                {/* <h2>24/7</h2> */}
                <img
                  src="/images/hand.svg"
                  alt=""
                  style={{ color: "white" }}
                />
                <p>Water resistant and tough for all weather conditions</p>
              </Outrage>
            </DetailContainer>
          </ButtonGroup>
        </Buttons>
      </UpperContainer>
    
    </FullContainer>
  );
}

export default Section4;
const FullContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const LowerContainer = styled.div`
  width: 30%;
  margin-top: 30px;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    p {
      a {
        color: gray;
        text-decoration: underline;
      }
    }
  }
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
`;

const UpperContainer = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/images/powerWall4.jpg");
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
  width: 50vw;
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
    width: 15rem;
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
    width: 15rem;
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
    width: 15rem;
    margin-top: 7px;
    font-size: 0.8rem;
  }
  cursor: pointer;
`;

