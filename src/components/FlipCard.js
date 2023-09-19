import React from 'react';
import styled from 'styled-components';

function FlipCard(props){
  return(
    <Card className={props.name}>
      <CardContent>
        <CardFront className="front">{props.front}</CardFront>
        <CardBack className="back">{props.back}</CardBack>
      </CardContent>
    </Card>
  )
}

const CardContent = styled.div`
  width: 100%; 
  height:100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
`

const Card = styled.div`
  position: relative;

  &:hover{
    ${CardContent}{
      transform: rotateY(180deg);
      transition: transform 0.5s;
    }
  }
`;

const CardFront = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`

const CardBack = styled(CardFront)`
  transform: rotateY(180deg);
`


export default FlipCard;