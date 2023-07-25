import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

function Section1() {
  return (
    <Wrap>
      <Video autoPlay loop muted>
          <source src="./videos/solarPanelv1.webm" type="video/mp4" />
        </Video>
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
            Solar Panels for Your Home
          </h1>
          <p>Lowest cost Solar Panels in America</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <DetailContainer>
              <Solar>
                {/* <AddToPhotosIcon /> */}
                <img
                  src="/images/solar.svg"
                  alt=""
                  style={{ color: "white" }}
                />
                <p>Guaranteed Lowest Price in America</p>
              </Solar>
              <Warrenty>
                <img
                  src="/images/solar.svg"
                  alt=""
                  style={{ color: "white" }}
                />
                <p>Integrated Product Ecosystem</p>
              </Warrenty>
              <Outrage>
                <h2>24/7</h2>
                <p>System Performance Moitoring</p>
              </Outrage>
            </DetailContainer>
              <ButtonDiv>
              <LeftBtn>
                <a href="#">Order Now</a>
              </LeftBtn>
              <TransparentBtn>
                <a href="#">Schedule a Cunsultation</a>
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
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; /* Added positioning */
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; /* Positioned the video absolutely */
  top: 0;
  left: 0;
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
    width: 6.6rem;
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
    width: 8rem;
    margin-top: 7px;
    font-size: 0.8rem;
  }
  cursor: pointer;
`;
