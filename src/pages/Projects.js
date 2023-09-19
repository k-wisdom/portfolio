import React from 'react';
import StickyBox from '../components/StickyBox';
import projectsData from '../projectsData.json';

function Project(){
  return(
    <>
      <h2 className="title_h2">FEATURED WORK</h2>
      <div className="sticky_box_wrapper">
        {
          projectsData.map((item, index) => {
            return <StickyBox content={item} key={item.id}/>
          })
        }
      </div>
    </>
  )
}

export default Project;