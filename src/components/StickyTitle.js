import React, {forwardRef} from 'react';

function StickyTitle(props, ref){
  
  const titleClickFn = (e) => {
    const target = e.currentTarget;
    const offsetTop = target.nextElementSibling.offsetTop;
    window.scrollTo({top:offsetTop, behavior: 'smooth'});
  } 

  return(
    <p className="sticky_box_title" onClick={(e) => titleClickFn(e)} ref={navRef => ref.current[props.idx] = navRef}>
      <em>{props.title}</em>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="svg_arrow_down"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path></svg>
    </p>
  )
}

export default forwardRef(StickyTitle);