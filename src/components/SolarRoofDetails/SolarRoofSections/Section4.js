import React from 'react'
import styled from "styled-components"

function Section4() {
  return (
    <Container>
        <VideoContainer>
        <Video controls autoPlay loop muted>
          <source src="./videos/hammer.mp4" type="video/mp4" />
        </Video>
        </VideoContainer>
        <VideoDetail>
            <div>
            <span>Durability</span>
            <h1>Take on the Elements</h1>
            <p>Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof. Both are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof will continue to produce clean energy and protect your home for decades to come.
            </p>
            </div>
            <Button>Order Now</Button>
        </VideoDetail>
    </Container>
  )
}

export default Section4

const Container = styled.div`
display:flex;
width:100vw;
height:100vh;
`
const VideoContainer = styled.div`
width: 70%;
height: 100vh;
`
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative; /* Positioned the video absolutely */
  top: 0;
  left: 0;
`;
const VideoDetail = styled.div`
    width: 30%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding: 55px 35px;
    h1{
        margin: 0px 0px 20px 0px;
        padding: 10px 0px;
    }
    p{
        margin-top: 20px;
        color: gray;
    }
`
const Button = styled.button`
padding: 8px 50px;
border: 3px solid black;
border-radius: 5px;
background-color: white;
color:black;
&:hover{
    background-color: black;
    color:white;
}
cursor:pointer;
`