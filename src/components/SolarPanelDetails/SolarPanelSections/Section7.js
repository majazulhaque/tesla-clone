import React from "react";
import styled from "styled-components";

function Section7() {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <DetailContainer>
        <div>
          <span>Experience</span>
          <h1>24/7 Monitoring</h1>
          <button>Order Now</button>
        </div>
        <p>
        Manage your solar system from anywhere in the world with 24/7 mobile 
        monitoring. Watch your energy in real time or set your preferences to
         optimize for energy independence.
        </p>
      </DetailContainer>
    </Container>
  );
}

export default Section7;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.img`
  width: 100vw;
  height: 75vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solarPanel6.jpg");
`;

const DetailContainer = styled.div`
width:75%;
margin-top: 30px;
display:flex;
align-items:flex-start;
justify-content:space-between;
div{
    width:50%;
    display: flex;
    flex-direction: column;
    button{
        width: 55%;
        margin-top: 20px;
        padding: 8px 40px;
        border-radius:5px;
        background-color:white;
        cursor:pointer;
    }
    button:hover{
        background-color:black;
        color:white;
    }
}
p{
    margin: 0px 50px;
}
`;
