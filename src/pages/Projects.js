import React, { useRef, useEffect, forwardRef } from 'react';
import LinedBox from '../components/LinedBox';
import StickyTitle from '../components/StickyTitle';
import projectsData from '../projectsData.json';
import '../assets/scss/pages/_project.scss'

function Project(props, ref){
  const scrollRef = useRef([]);
  const navRef = useRef([]);

  const inView = () => {
    const box = document.querySelector('.sticky_box_wrapper').getBoundingClientRect();
    return box.top <= window.innerHeight && box.top >= -box.height
  }

  useEffect(() => {
    const changeTitleStyle = () => {

      if(!inView()) {
        return
      };

      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY && ref.offsetTop + ref.clientHeight - 100 >  window.scrollY) {
          navRef.current.forEach(ref => {
            ref.classList.remove('active')
          });
          navRef.current[idx].classList.add('active')
        }else{
          navRef.current[idx].classList.remove('active')
        }
      });
    };

    window.addEventListener('scroll', changeTitleStyle);

    return () => {
      window.removeEventListener('scroll', changeTitleStyle);
    };
  }, [scrollRef]);

  return(
    <section className="section_project toggle" ref={projectRef => ref.current[1] = projectRef}>
      <div className="bx_con_1400">
        <h2 className="title_h2"><span className="point_text">Featured</span><br/> Project</h2>
        <div className="sticky_box_wrapper">
          {
            projectsData.map((item, index) => {
              return <React.Fragment key={item.id}>
                      <StickyTitle title={item.list_name} ref={navRef} idx={index}/>
                      <LinedBox content={item} ref={scrollRef} idx={index}/>
                    </React.Fragment>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default forwardRef(Project);
