import React from "react";
import Styled from "styled-components";

function Section5() {
  return (
    <Container>
      <DetailContainer>
        <div>
          <span>Installation</span>
          <h1>Trusted Expertise</h1>
          <Button>Order Now</Button>
        </div>
        <p>
          Our in-house team of energy professionals has installed nearly 4.0 GW
          of solar across approximately 480,000 roofs—cumulatively generating
          over 25.0 TWhs of clean energy. From design to power on, we take care
          of everything. <a href="#">Chat with a Tesla Advisor</a> to ask any
          questions about Solar Roof.
        </p>
      </DetailContainer>
      <VideoContainer>
        <Video controls autoPlay loop muted>
          <source src="./videos/Carousel.mp4" type="video/mp4" />
        </Video>
      </VideoContainer>
      <ToggleDiv>
        <Design>
          <button></button>
          <h4>Design</h4>
          <p>Aerial imagery and 3D modeling determine your custom design</p>
        </Design>
        <Design>
          <button></button>
          <h4>Installation</h4>
          <p>
            Our integrated design enables quick tile and Powerwall installation
          </p>
        </Design>
        <Design>
          <button></button>
          <h4>Power On</h4>
          <p>Final cleanup is completed before system activation</p>
        </Design>
      </ToggleDiv>
    </Container>
  );
}

export default Section5;
const Container = Styled.div`
width:100vw;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
`;
const DetailContainer = Styled.div`
padding:65px 10px;
width: 70%;
display:flex;
align-items:center;
justify-content:space-between;
div{
    width:100%;
    display:flex;
    flex-direction:column;
    h1{
        padding: 15px 0px;
    }
    
}
p{
    color:gray;
    padding-left: 20px;
    a{
        color:gray;
        text-decoration:underline;
    }
}
`;
const Button = Styled.button`
width:50%;
padding: 5px 30px;
border: 3px solid black;
border-radius: 4px;
background-color: white;
font-weight:bolder;
&:hover{
    background-color:black;
    color:white;
}
cursor:pointer;
`;

const VideoContainer = Styled.div`
width:100%;
display:flex;
justify-content:center;
`;
const Video = Styled.video`
  width: 90%;
  height: 85%;
  object-fit: cover;
  position: relative; /* Positioned the video absolutely */
  top: 0;
  left: 0;
`;
const ToggleDiv = Styled.div`
width: 70%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 40px 0px;
`;
const Design = Styled.div`
width: 95%;
    button{
        width:95%;
        border: 3px solid gray;
    }
    h4{
        padding: 5px 0px;
        color:gray;
    }
    p{
        text-align: start;
        color: gray;
    }
    &:hover{
        button{
            width:95%;
            border: 3px solid #292a2b;
        }
        h4{
            padding: 5px 0px;
            color:#292a2b;
        }
        p{
            text-align: start;
            color: #292a2b;
        }
    }
    cursor:pointer;
`;
