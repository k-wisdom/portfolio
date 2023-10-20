import React from 'react';
import styled from 'styled-components';

function FlipCard({front, back}){
  return(
    <Card>
      <CardFront className="front">{front}</CardFront>
      <CardBack className="back">{back}</CardBack>
    </Card>
  )
}
const CardFront = styled.div`
  position: absolute;
  backface-visibility: hidden;
  background-color:#fff;
  transform: perspective(600px) rotateY(0deg);
  transition: transform 1s linear 0s;
  width: 100%;
  height:100%;
`

const CardBack = styled(CardFront)`
  transform: perspective(600px) rotateY(180deg);
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
`

const Card = styled.div`
  transition: transform 1s;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;

  &:hover{
    ${CardFront}{
        transform: perspective(600px) rotateY(-180deg);
    }
    
    ${CardBack}{
        transform: perspective(600px) rotateY(0deg);
    }
  }
`

export default FlipCard;