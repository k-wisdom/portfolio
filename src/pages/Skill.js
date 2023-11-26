import React, {forwardRef} from 'react';
import '../assets/scss/pages/_skill.scss'

function Skill(props, ref){

  const skillList = [
    [
      {name:'HTML5', img:'html5.png'},
      {name:'CSS3', img:'css3.png'},
      {name:'SCSS', img:'sass.png'},
    ],
    [
      {name:'Javascript', img:'js.png'},
      {name:'ES6', img:'es6.png'},
      {name:'JQuery', img:'jquery.png'},
      {name:'Typescript', img:'ts.png', interest:true},
      {name:'React', img:'reactjs.png', interest:true},
      {name:'Flutter', img:'flutter.png'},
    ],
    [
      {name:'Zeplin', img:'zeplin.png'},
      {name:'Figma', img:'figma.png'},
      {name:'Photoshop', img:'photoshop.png'},
    ],
    [
      {name:'Git', img:'git.png'},
      {name:'Github', img:'github.png'},
      {name:'Sourcetree', img:'sourcetree.png'},
      {name:'Visual Studio Code', img:'vscode.png'},
      {name:'Spring Tool Suite 4', img:'sts4.png'},
    ]
  ]

  return(
    <section className="section_skill bg_change _dark" ref={skillRef => ref.current[3] = skillRef}>
      <div className="bx_con_1400">
        <div className="group_circle">
          <i className="annotation">* 관심분야</i>
          <h2 className="title_h2">SKILL &amp; <i>TOOLS</i></h2>
          {skillList.map((group,idx) => {
            return (
              <div key={idx}>
                {group.map((skill) => {
                  return <span key={skill.img} className={skill.interest && '_blue'}><img src={require(`../assets/img/${skill.img}`)} alt={skill.name}/><b>{skill.name}</b></span>
                })}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default forwardRef(Skill);