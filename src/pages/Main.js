import FlowText from '../components/FlowText';
import Header from '../components/Header';
import About from './About';
import Career from './Career';
import Skill from './Skill';
import Project from './Projects';
import Contact from './Contact';
import { useEffect, useRef } from 'react';
import TopBtn from '../components/TopBtn';
import MainTop from './MainTop';

function Main(){
    const sectionRef = useRef([]);
    const mainRef = useRef(null);

    useEffect(()=>{
        const addSectionActive = () => {
            sectionRef.current.forEach((ref, idx) => {
                if(ref.offsetTop - 180 < window.scrollY){
                    ref.classList.add('active');
                    if(ref.classList.contains('bg_change')){
                        mainRef.current.classList.add('bg_beige')
                    }else{
                        mainRef.current.classList.remove('bg_beige')
                    }
                }else{
                    if(ref.classList.contains('toggle'))
                    ref.classList.remove('active');
                }
            })
        }

        const timer = setInterval(() => {
            window.addEventListener('scroll', addSectionActive);
        }, 100)

        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', addSectionActive)
        }

    },[sectionRef])
    
    return (
        <>
            <Header menuRef={sectionRef}/>
            <div className="main_wrap" ref={mainRef}>
                <MainTop/>
                <About ref={sectionRef}/>
                <FlowText name="txt_portfolio" val="2023 Portfolio&nbsp;&nbsp;&nbsp; KIMJIHYE&nbsp;&nbsp;&nbsp; Front-end Developer&nbsp;&nbsp;&nbsp;"/>
                <Project ref={sectionRef}/>
                <Skill ref={sectionRef}/>
                <Career ref={sectionRef}/>
                {/* <section className="section_mockup">
                    <FlowText name="back_text_1" val="javascript&nbsp;&nbsp;&nbsp; ES6&nbsp;&nbsp;&nbsp; react&nbsp;&nbsp;&nbsp; scss&nbsp;&nbsp;&nbsp; html&nbsp;&nbsp;&nbsp; git&nbsp;&nbsp;&nbsp;"/>
                    <div className="device">
                        <img className="laptop" src={require('../assets/img/macbook.jpg')} alt="노트북"/>
                        <img className="phone" src={require('../assets/img/phone.jpg')} alt="스마트폰"/>
                    </div>
                    <FlowText name="back_text_2"toLeft={true} val="RESPONESIVE WEB&nbsp;&nbsp;&nbsp; WEBAPP&nbsp;&nbsp;&nbsp;"/>
                </section> */}
                <Contact ref={sectionRef}/>
            </div>
            <TopBtn/>
        </>
    )
}

export default Main;