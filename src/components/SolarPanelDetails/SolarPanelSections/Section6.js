import React from 'react'
import styled from "styled-components"

function Section6() {
  return (
    <Container>
        <ImageContainer></ImageContainer>
        <DetailContainer>
           <div>
           <span>Efficiency</span>
            <h1>Maximum Solar Production</h1>
            <p>Tesla solar panels are designed to be highly efficient, 
                delivering maximum solar production year-round, even on 
                roofs with complicated angles. Powered by <a href="#">Tesla
                 Solar Inverter</a>, your fully integrated system is safe and
                  reliable.</p>
           </div>
            <button>Order Now</button>
        </DetailContainer>
    </Container>
  )
}

export default Section6
const Container = styled.div`
width:100%;
height:100vh;
display:flex;
`
const ImageContainer = styled.img`
  width: 75%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solarPanel5.jpg");
`;
const DetailContainer = styled.div`
width: 30%;
display:flex;
flex-direction:column;
align-items:flex-start;
padding: 60px 0px 40px 25px;
justify-content: space-between;
h1{
    padding: 20px 0px;
}
p{
    padding: 0px 30px 0px 0px;
    color:gray;
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