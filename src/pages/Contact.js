import React, {forwardRef} from 'react';
import '../assets/scss/pages/_contact.scss'
import FlipCard from '../components/FlipCard';

function Contact(props, ref){
  return(
    <section className="section_contact toggle" ref={contactRef => ref.current[5] = contactRef}>
      <div className="bx_contact">
          <h2 className="title_h2">Contact<br/> me</h2>
          <div className="contact_card">
            <FlipCard back={<p>김지혜<br/>010-3011-0378<a href="mailTo:bnm1354@gmail.com">bnm1354@gmail.com</a></p>}/>  
          </div>
          <b className="title_h2">Thanks for<br/> watching</b>
      </div>
    </section>
  )
}

export default forwardRef(Contact);