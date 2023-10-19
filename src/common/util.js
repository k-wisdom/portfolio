  import React from 'react';
  //줄바꿈
  export function breakLineFn(text){
    return text.split('\n').map((txt, index)=><React.Fragment key={index}>{txt}<br/></React.Fragment>)
  }
