

function About(){
  return(
    <div className="bx_con_1600">
      <div className="about_con">
          <div className="about_left">
            <b className="top_text"><span>Work</span><br/> with me</b>
            <p>
              안녕하세요.<br/>
              저는 웹 퍼블리싱, 프론트엔드 업무를 진행했으며<br/>
              특히 퍼블리싱은 3년간 혼자 도맡아 책임감을 갖고 작업에 임했습니다.<br/>
              효율을 중시하기 때문에 집중력이 좋고, 꼼꼼히 계획을 통해 업무를 수행합니다.
            </p>
          </div>
          <div className="frame">
            <ul>
                <li><b>Name</b>김지혜</li>
                <li><b>Birth</b>97.02.24</li>
                <li><b>Phone</b>010-3011-0378</li>
                <li><b>E-mail</b>bnm1354@gmail.com</li>
                <li><b>Github</b>https://github.com/k-wisdom</li>
            </ul>  
            <img src={require("../assets/img/JH_0267.png")} alt="프로필 이미지"/>      
          </div>
      </div>
    </div>
  )
}

export default About;