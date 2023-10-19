import React, { useEffect } from 'react';
import styled from "styled-components";

function FlowText(props){

  const divName = props.name ? props.name : 'flow_wrapper';

  useEffect(() => {    
    
    const flowbox = document.querySelector('.'+divName);
    const scrollFlow = new ScrollFlow(flowbox, props.toLeft);

    const handleScroll = () => {
      scrollFlow.animate()
    }

    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return(
    <>
      <Wrapper className={divName}>
        <div className="flow_wrap">
          <Text>{props.val}</Text>
          <Text>{props.val}</Text>
          <Text>{props.val}</Text>
        </div>
      </Wrapper>
    </>
  )
}

class ScrollFlow{
  constructor(flowbox, toLeft){
    this.flowbox = flowbox;
    this.flowCon = flowbox.querySelector('.flow_wrap');
    this.toLeft = toLeft;
  }

  get inView() {
    const box = this.flowbox.getBoundingClientRect();
    return box.top <= window.innerHeight && box.top >= -box.height
  }

  get offset(){
    return this.flowCon.getBoundingClientRect().top * 0.5;
  }
  
  animate(){
    if (!this.inView){
        return;
    }
    let offsetX = this.offset * 0.5;

    if(!this.toLeft){
      this.flowCon.style.transform = `translateX(-${offsetX}px)`;
    }else{
      this.flowCon.style.transform = `translateX(${offsetX}px)`;
    }
  }
}

const Wrapper = styled.div`
  position:relative;
  overflow:hidden;
  z-index:9;
  width: 100%;
  box-sizing:border-box;
  white-space:nowrap;
`;

const Text = styled.span`
  margin-right:1rem;
  font-weight:bold;
`;

export default FlowText;