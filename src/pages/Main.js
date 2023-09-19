import FlowText from '../components/FlowText';
import Header from '../components/Header';
import About from './About';
import Career from './Career';
import Skill from './Skill';
import Project from './Projects';
import Contact from './Contact';

function Main(){
    return (
        <>
            <Header/>
            <div className="main_wrap">
                <section className="section_main_top">
                    <div className="main_top">
                        <h1>PORTFOLIO</h1>
                        <span className="title_desc">Front-end Development, Web Publishing</span>
                        <div className="bg_video">
                            <div className="video_wrap">
                                <video autoPlay preload="auto" loop muted playsInline>
                                    <source src={require('../assets/img/sparkling_sea.mov')} type="video/webm"></source>
                                </video>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_about">
                    <About/>
                </section>
                <FlowText val="2023 Portfolio&nbsp;&nbsp;&nbsp; KIMJIHYE&nbsp;&nbsp;&nbsp; Front-end Developer&nbsp;&nbsp;&nbsp;"/>
                <section className="section_project">
                    <div className="bx_con_1600">
                        <Project/>
                    </div>
                </section>
                <section className="section_skill">
                    <div className="bx_con_1600">
                        <Skill/>
                    </div>
                </section>
                <section>
                    <Career/>
                </section>
                
                <Contact/>
            </div>
        </>
    )
}

export default Main;