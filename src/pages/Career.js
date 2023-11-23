import React, {forwardRef} from 'react';
import '../assets/scss/pages/_career.scss'
import careerData from '../careerData.json'
import { breakLineFn } from '../common/util';

function Career(props, ref){
    const openNewTabFn = (url) => {
        if(url == null){
            return;
        }
        window.open(url, "_blank", "noopener, noreferrer");
    };
    return(
        <section className="section_career bg_change _beige toggle" ref={worksRef => ref.current[4] = worksRef}>
            <div className="career bx_con_1400">
                <h2 className="title_h2"><span className="point_text">Works</span></h2>
                <ul className="career_list">
                    {
                        careerData.map((data) => {
                            return <li className={data.url && "_site"} key={data.id} onClick={()=>{openNewTabFn(data.url)}}>
                                        <span className="date">{breakLineFn(data.period)}</span>
                                        <div>
                                            <b>{data.proj_name}</b>
                                            <p>{data.proj_desc}</p>
                                            {
                                                data.img_path && <img className={data.is_mobile && "m_img"} src={data.img_path} alt={data.proj_name}></img>
                                            }
                                            
                                        </div>
                                    </li>
                        })
                    }
                    
                </ul>
            </div>
        </section>
    )
}

export default forwardRef(Career);