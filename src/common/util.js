  //줄바꿈
  export function breakLineFn(text){
    return text.split('\n').map((txt)=><>{txt}<br/></>)
  }
