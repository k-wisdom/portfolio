import React, {forwardRef} from 'react';
import { breakLineFn } from '../common/util';
import Video from './Video';

function LinedBox(props, ref){
  const data = props.content;

  return(
    <div className="lined_box_wrapper" ref={boxRef => ref.current[props.idx] = boxRef }>
      <div className="lined_box">
        <div className="lined_box_left">
            <h3>{breakLineFn(data.project_name)}</h3>
            <span>{data.type}</span>
            <p>{breakLineFn(data.desc)}</p>
            {data.url && <a href={data.url} target="_blank" rel="noreferrer">Visit Website</a>}
        </div>
        <div className="lined_box_right">
          <div className="lined_video_wrap">
            <Video src={data.video_path} poster={data.poster}/>
          </div>
          <div className="lined_box_content">
            <div className="content_text">
              {
                data.desc_list.map((item, index) => {
                  if(data.desc_list.length > 1){
                    return <React.Fragment key={index}><span className="degree">{index+1}차 {index >= 1 && '리뉴얼'}</span><ul>{item.map((txt, index) => <li key={index}>{txt}</li>)}</ul></React.Fragment>
                  }else{
                    return <ul key={index}>{item.map((txt, index) => <li key={index}>{txt}</li>)}</ul>
                  }
                })
              }
            </div>
            <div className="info_list">
                <ul>
                  <li><b>YEAR</b>{data.year}</li>
                  <li><b>TIMELINE</b><span>{breakLineFn(data.timeline)}</span></li>
                  {data.url != null && <li><b>WEB URL</b><a href={data.url} target="_blank"  rel="noreferrer" >{data.url}</a></li>}
                  <li className="bx_skill">
                    <b>SKILL</b>
                    <span>{data.skills.map((item, index) => <i key={index}>{item}</i>)}</span>
                  </li>
                  <li><b>Contribution</b><span>{breakLineFn(data.cbt)}</span></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        <div className="img_with_box">
          {data.proj_challange && 
            <div className="lined_three_box">
              <div>
                  <span><b>CHALLANGE</b></span>
                  <div>{data.proj_challange.map((item, index) => <p key={index}>{breakLineFn(item)}</p>)}</div>
              </div>
              <div>
                  <span><b>SOLUTION</b></span>
                  <div>{data.proj_solution.map((item, index) => <p key={index}>{breakLineFn(item)}</p>)}</div>
              </div>
              <div>
                  <span><b>RESULT</b></span>
                  <div>{data.proj_result.map((item, index) => <p key={index}>{breakLineFn(item)}</p>)}</div>
              </div>
            </div>
          }
          {data.img_path && <div className="img_wrap">
            {data.img_path.map((img, index) => {
              return <span key={index}><img src={img.path} alt={img.alt}/></span>
            })}
          </div>}
      </div>
    </div>
  )
}

export default forwardRef(LinedBox);