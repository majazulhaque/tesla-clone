import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section(props) {
  const { title, description, backgroundImg, leftBtnText, rightBtnText, backgroundVideo } = props;

  return (
    <Wrap bgImage={backgroundImg} hasVideo={Boolean(backgroundVideo)}>
      {backgroundVideo ? (
        <Video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </Video>
      ) : null}
      <Fade bottom>
        <ItemText>
         {backgroundVideo ? <h1 style={{color:"white",fontSize:"3rem", fontFamily:"initial"}}>{title}</h1> :<h1>{title}</h1>}
          {backgroundVideo ? <p style={{color:"white",fontSize:"1.1rem",fontFamily:"initial"}}>{description}</p> :<p>{description}</p>}
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            {backgroundVideo ? <TransparentBtn>{leftBtnText}</TransparentBtn> : <LeftButton>{leftBtnText}</LeftButton>}
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) =>
    props.bgImage ? `url("/images/${props.bgImage}")` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => (props.hasVideo ? "transparent" : "orange")};
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
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DemoButton = styled(LeftButton)`
  background-color: transparent;
  opacity: 1;
  color: white;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;

const TransparentBtn = styled.div`
 background:transparent;
 color: white;
 padding: 10px 20px;
 border: 3px solid white;
 border-radius: 4px;
`
