import React, { useEffect } from 'react';
import styled from "styled-components";

function FlowText(props){
  useEffect(() => {    
    const flowbox = document.querySelector('.flow_wrapper');
    const scrollFlow = new ScrollFlow(flowbox);

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
      <Wrapper className="flow_wrapper">
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
    constructor(flowbox){
        this.flowbox = flowbox;
        this.flowCon = flowbox.querySelector('.flow_wrap');
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
        this.flowCon.style.transform = `translateX(-${offsetX}px)`;
    }
}

const Wrapper = styled.div`
  position:relative;
  overflow:hidden;
  z-index:9;
  padding: 2rem 2rem;
  width: 100%;
  box-sizing:border-box;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  background-color:#fff;
  font-size:2.2rem;
  white-space:nowrap;
`;

const Text = styled.span`
  margin-right:1rem;
  font-weight:bold;
  text-shadow: 1px 1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, -1px -1px 0 #000000, 1px 0px 0 #000000, 0px 1px 0 #000000, -1px 0px 0 #000000, 0px -1px 0 #000000;
  color:#fff;
`;

export default FlowText;