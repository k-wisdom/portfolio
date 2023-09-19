import React from 'react';
import { breakLineFn } from '../common/util';


function StickyBox(props){
  const data = props.content;

  return(
    <>
      <div className="sticky_box">
        <div className="sticky_box_title">
          <em>{data.list_name}</em>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="svg_arrow_down"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path></svg>
        </div>
        <div className="sticky_box_con">
            <div className="_top">
                <div className='title_desc'>
                    <h3>{breakLineFn(data.project_name)}</h3>
                    <p>{data.desc}</p>
                    {
                      data.desc_list.map((item, index) => {
                        if(data.desc_list.length > 1){
                          return <><span className="degree">{index+1}차</span><ul>{item.map(txt => <li>{txt}</li>)}</ul></>
                        }else{
                          return <ul>{item.map(txt => <li>{txt}</li>)}</ul>
                        }
                      })
                    }
                </div>
                <div className="info_list">
                    <ul>
                        <li><b>YEAR</b>{data.year}</li>

                        <li><b>TIMELINE</b>{breakLineFn(data.timeline)}</li>
                        <li><b>SERVICES</b>{data.type}</li>
                        
                        {data.url != null && <li><b>WEB URL</b><a href={data.url} target="_blank"  rel="noreferrer" >{data.url}</a></li>}
                        <li className="bx_skill">
                          <b>SKILL</b>
                          {data.skills.map(item => <span>{item}</span>)}
                        </li>
                        <li><b>Contribution</b>{breakLineFn(data.cbt)}</li>
                    </ul>
                </div>
            </div>
            <div className="_bottom">
                <div className="prj_text_wrap">
                    <div className="prj_text">
                        <b>CHALLANGE</b>
                        {data.proj_challange.map(item => <p>{item}</p>)}
                    </div>
                    <div className="prj_text">
                        <b>SOLUTION</b>
                        {data.proj_solution.map(item => <p>{item}</p>)}
                    </div>
                    <div className="prj_text">
                        <b>RESULT</b>
                        {data.proj_result.map(item => <p>{item}</p>)}
                    </div>
                </div>
                <div className="prj_img_wrap">
                    <a href={data.url} target="_blank" rel="noreferrer" >
                      <img src={data.img_path} alt={data.img_alt}></img>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default StickyBox;