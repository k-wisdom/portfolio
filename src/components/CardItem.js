import { breakLineFn } from '../common/util';

export default function CardItem({content}){
  const {title, date, url, skill, desc, desc_list, img_path, alt} = content;
  const handleClick = () => {
    if(url){
      window.open(url, "_blank", "noopener, noreferrer")
    }else{
      return;
    }
  }
  return(
    <li onClick={handleClick} style={url &&{cursor:"pointer"}}>
      <div className="card_content">
        {url && <div className="arrow"></div>}
        <h3 className="title">{title}</h3>
        <span><b>DATE</b> {date}</span>
        { url && <span><b>URL</b><a href={url}>{url}</a></span>}
        <span>
          <b>SKILL</b> 
          <em className="bx_skill">
            {skill.map((item, idx) => {
              return <i key={idx}>{item}</i>
            })}
          </em>
        </span>
        <div className="desc_con">
          <p>{breakLineFn(desc)}</p>
          <ul>
            {
              desc_list.map((li, idx) => {
                return <li key={idx}>{breakLineFn(li)}</li>
              })
            }
          </ul>
        </div>
      </div>
      <div className="card_img">
        <img src={img_path} alt={alt}/>
      </div>
    </li>
  )
}