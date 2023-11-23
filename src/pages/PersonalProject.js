import { forwardRef } from 'react';
import CardItem from '../components/CardItem';
import datas from '../sideProjectData.json';

function PersonalProject(props, ref){
  return (
  <section className="section_p_project bg_change _dark toggle" ref={projectRef => ref.current[2] = projectRef}> 
    <div className="bx_con_1400">
      <h2 className="title_h2"><span className="point_text">Personal</span><br/> Project</h2>
      <ul className="card_list">
        {datas.map((data, index) => {
          return <CardItem key={data.id} content={data} />
        })}
      </ul>
    </div>
  </section>
  )
}

export default forwardRef(PersonalProject)