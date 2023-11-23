import React, {forwardRef} from 'react';
import '../assets/scss/pages/_skill.scss'

function Skill(props, ref){

  return(
    <section className="section_skill bg_change _beige" ref={skillRef => ref.current[3] = skillRef}>
      <div className="bx_con_1400">
        <div className="group_circle">
          <i className="annotation">* 관심분야</i>
          <h2 className="title_h2">SKILL &amp; <i>TOOLS</i></h2>
          <div>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>SCSS</span>
          </div>
          <div>
              <span>Javascript</span>
              <span>ES6</span>
              <span>JQuery</span>
              <span className="_blue">Typescript</span>
              <span className="_blue">React</span>
              <span>Flutter</span>
          </div>
          <div>
              <span>Zeplin</span>
              <span>Figma</span>
              <span>Photoshop</span>
          </div>
          <div>
              <span>Git</span>
              <span>Github</span>
              <span>Soucetree</span>
              <span>Visual Studio Code</span>
              <span>Spring Tool Suite 4</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default forwardRef(Skill);