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
            Powerwall
          </h1>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
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
              <ButtonDiv>
              <LeftBtn>
                <a href="#">Order Powerwall</a>
              </LeftBtn>
              <TransparentBtn>
                <a href="#">Order with Solar</a>
              </TransparentBtn>
              </ButtonDiv>
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
  background-image: url("/images/powerWall1.jpg");
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
  width:100%;
  display: flex;
  flex-direction:column;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;

const Buttons = styled.div`
  width: 35vw;
  text-align: center;
`;

const LeftBtn = styled.div`
width: 18rem;
  background-color:white;
  color:black;
  padding: 8px 20px;
  border-radius: 4px;
  margin: 10px 10px;
  border: 3px solid white;
  a{
    font-size:0.8rem;
    background-color:white;
    color:black;
    font-weight:bolder;
  }
  cursor:pointer;
`;

const TransparentBtn = styled.div`
width: 18rem;
background-color:transparent;
color:white;
padding: 8px 20px;
border-radius: 4px;
margin: 10px 10px;
border: 3px solid white;
a{
  font-size:0.8rem;
  background-color:transparent;
  color:white;
  font-weight:bolder;
}
cursor:pointer;
`;
const ButtonDiv = styled.div`
width: 100%;
display:flex;
padding: 1rem 2rem;
  align-items:center;
  justify-content:space-between;
  color:white;
`

const DetailContainer = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:white;
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
  h2{
    margin: 8px 0px;
  }
  p {
    width: 6rem;
    margin-top: 7px;
    font-size: 0.8rem;
  }
  cursor: pointer;
`;
