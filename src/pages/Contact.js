import React from 'react';
import '../assets/scss/pages/_contact.scss'
import FlipCard from '../components/FlipCard';

function Contact(){
  return(
    <section className="section_contact">
      <div className="bx_contact">
          <h2 className="title_h2">Contact<br/> me</h2>
          <FlipCard name="contact_card" back={<p>김지혜<br/>010-3011-0378<a href="mailTo:bnm1354@gmail.com">bnm1354@gmail.com</a></p>}/>
          <b className="title_h2">Thanks for<br/> watching</b>
          {/* <b className="title_h2">010-3011-0378<br/> bnm1354@gmail.com</b> */}
      </div>
    </section>
  )
}

export default Contact;