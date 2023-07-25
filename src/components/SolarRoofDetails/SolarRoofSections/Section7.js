import React from "react";
import styled from "styled-components";

function Section7() {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <DetailContainer>
        <div>
          <span>Control</span>
          <h1>Monitor and Optimize</h1>
          <button>Order Now</button>
        </div>
        <p>
          With the Tesla app, you can monitor your energy production in real
          time. Control your system from anywhere with instant alerts and remote
          access.
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
  background-image: url("/images/solarroof4.jpg");
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
        width: 45%;
        margin-top: 20px;
        padding: 8px 30px;
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
