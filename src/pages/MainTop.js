import { useEffect } from 'react';

function MainTop(){

    useEffect(() => {
      const bg = document.querySelector('.bg');

      const scrollBgFn = () => {
        if(!inView()) return;
        const scrollTop = window.scrollY * 0.5;
        bg.style.backgroundPositionY = `${-scrollTop}px`
      }

      const inView = () => {
        const box = document.querySelector('.section_main_top').getBoundingClientRect();
        return box.top <= window.innerHeight && box.top >= -box.height
      }

      window.addEventListener('scroll', scrollBgFn);

      return () => {
        window.removeEventListener('scroll', scrollBgFn);
      };

    },[])

  return(
    <section className="section_main_top">
        <div className="main_top">
            <h1>PORTFOLIO</h1>
            <span className="title_desc">Front-end Developer / 2023</span>
            <div className="bg_frame_wrap">
              <div className="bg_frame bx_con_1400"><div className="bg"></div></div>
              <div className="down_arrow"><span className="hide">scroll down</span></div>
            </div>
        </div>
    </section>
  )
}

export default MainTop;