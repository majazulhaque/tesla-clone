import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

function Section1() {
  return (
    <Wrap>
      <Fade bottom>
        <ItemText>
          <h1
            style={{
              fontSize: "3rem",
              color: "white",
              fontFamily: "initial",
              fontWeight: "500",
            }}
          >
            Solar Roof
          </h1>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <DetailContainer>
              <Solar>
                {/* <AddToPhotosIcon /> */}
                <img src="/images/solar.svg" alt="" style={{color:"white"}} />
                <p>Beautiful Solar</p>
              </Solar>
              <Warrenty>
                <h2>25-Year</h2>
                <p>Tile Warrenty</p>
              </Warrenty>
              <Outrage>
                <h2>24/7</h2>
                <p>Outrage Protection</p>
              </Outrage>
            </DetailContainer>
            <TransparentBtn>
              <a href="#">Order Now</a>
            </TransparentBtn>
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section1;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("/images/SolarRoof.jpg");
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
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items:center;
  justify-content:space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor:pointer;
`;

const Buttons = styled.div`
  text-align: center;
`;

const TransparentBtn = styled.div`
  background: transparent;
  color: white;
  text-align: center;
  cursor:pointer;
  margin: 20px 50px;
  a {
    color: white;
    padding: 10px 130px;
    border: 3px solid white;
    border-radius: 4px;
  }
  a:hover{
    background-color:white;
    color:#292a2b;
    font-weight:bolder;
  }
`;

const DetailContainer = styled.div`
  width: 27rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 20px;
`;
const Solar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    width: 3rem;
    margin-top: 7px;
    font-size: 0.8rem;
  }
  cursor:pointer;
`;
const Warrenty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    width: 3rem;
    margin-top: 7px;
    font-size: 0.8rem;
  }
  cursor:pointer;
`;
const Outrage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    width: 3rem;
    margin-top: 7px;
    font-size: 0.8rem;
  }
  cursor:pointer;
`;
