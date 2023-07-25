import React from 'react'
import styled from "styled-components"

function Section6() {
  return (
    <Container>
        <DetailContainer>
           <div>
           <span>Efficiency</span>
            <h1>Maximum Solar Production</h1>
            <p>Generate the most energy possible, even on roofs with
                 complicated angles and intermittent sunlight. Glass
                  solar tiles and architectural-grade steel tiles,
                   vent covers and ridge caps come together to form
                    a roof that is both durable and powerful. With
                    Tesla Solar Inverter, your fully integrated system
                     is safe, reliable and outage ready. And built-in 
                     connectivity ensures <a href="#">Tesla Solar Inverter</a> continues to improve with each over-the-air software update.</p>
           </div>
            <button>Order Now</button>
        </DetailContainer>
        <ImageContainer></ImageContainer>
    </Container>
  )
}

export default Section6
const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
`
const DetailContainer = styled.div`
width: 30%;
display:flex;
flex-direction:column;
align-items:flex-start;
padding: 60px 25px 40px 25px;
justify-content: space-between;
h1{
    padding: 20px 0px;
}
p{
    padding: 0px 30px 0px 0px;
    a{
        color:gray;
        text-decoration:underline;
    }
}
button{
    padding: 8px 50px;
    background-color: white;
    font-weight: bolder;
    border-radius: 5px;
}
button:hover{
    background-color:black;
    color:white;
    cursor:pointer;
}

`
const ImageContainer = styled.img`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solarroof3.jpg");
`;