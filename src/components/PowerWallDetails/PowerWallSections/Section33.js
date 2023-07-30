import React from "react";
import styled from "styled-components";

function Section33() {
  return (
    <Container>
      <ImageContainer>
      <Buttons>
        <ButtonGroup>
          <ImageDetailContainer>
            <Solar>
              {/* <AddToPhotosIcon /> */}
              <img
                src="/images/dollar.svg"
                alt=""
                style={{ color: "white" }}
              />
              <p>Customize settings
for personalized savings</p>
            </Solar>
            <Warrenty>
              <h2>10x</h2>
              <p>Stay connected with instant
alerts before severe weather</p>
            </Warrenty>
            <Outrage>
              {/* <h2>24/7</h2> */}
              <img src="/images/energy.svg" alt="" style={{ color: "white" }} />
              <p>Manage your energy</p>
            </Outrage>
          </ImageDetailContainer>
        </ButtonGroup>
      </Buttons>
      </ImageContainer>
      <DetailContainer>
        <div>
          <span>Design</span>
          <h1>Modern and Compact</h1>
          <button>Order Powerwall</button>
        </div>
        <p>
        With easy installation and a minimalist design, Powerwall complements
         a variety of home styles and solar systems. The compact, all-in-one
          construction features versatile mounting options for indoor or
           outdoor spaces. <a href="#">Chat with an energy advisor</a> to ask any questions
            about Tesla Powerwall.
        </p>
      </DetailContainer>
    </Container>
  );
}

export default Section33;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
width: 100vw;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: url("/images/powerWall3.jpg");
align-items: flex-start;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: relative; /* Added positioning */
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
      width: 40%;
      margin-top: 20px;
      padding: 8px 20px;
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
    a{
        color:gray;
        text-decoration:underline;
    }
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  width: 10vw;
  text-align: center;
`;

const ImageDetailContainer = styled.div`
  width: 60%;
  margin: 60px;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-between;
  color: white;
`;
const Solar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  margin-top: 80px;
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
text-align: start;
margin-top: 80px;
p {
  width: 8rem;
  margin-top: 7px;
  font-size: 0.8rem;
}
cursor: pointer;
`;
const Outrage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: start;
margin-top: 80px;
p {
  width: 8rem;
  margin-top: 7px;
  font-size: 0.8rem;
}
cursor: pointer;
`;
