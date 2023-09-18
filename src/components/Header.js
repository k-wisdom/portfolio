import React, { useState } from 'react';

function Header(){

  const [menuFlg, setMenuFlg] = useState(false);

  const menuFn = () => {

    const menuWrap = document.querySelector('#menuWrap');
    const bgWraps = document.querySelectorAll('.menu_background_wrap div');
    const gnb = document.querySelector('.gnb'); 

    if(!menuFlg){
        menuWrap.classList.add('active');
        bgWraps.forEach((item, index) => {
            item.style.transition = 'transform 1.3s';
            setTimeout(()=>{
                item.style.opacity = '1';
                item.style.transform = 'scale(180)';
            },120 * index)
        })
        setTimeout(()=>{ gnb.style.display = 'block';},600)
    }else{
        menuWrap.classList.remove('active');
        let bgWrapsReverse = Array.prototype.slice.call(bgWraps).reverse();
        bgWrapsReverse.forEach((item, index) => {
            item.style.transition = 'transform .6s';
            setTimeout(()=>{
                item.style.transform = 'scale(0)';
            },100 * index)
        })

        gnb.style.display = 'none';
    }

    setMenuFlg(!menuFlg);
  }

  return(
    <header className="fixed_header">
      <div className="bx_con_1600 header_content">
        <span>KIMJIHYE</span>
        <nav className="menu_wrap" id="menuWrap">
          <button className="btn_menu" onClick={menuFn}><span className="hide">메뉴</span></button>
          <div className="menu_background_wrap">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className="gnb" style={{display:"none"}}>
              <li><a href="#about">ABOUT ME</a></li>
              <li><a href="#project">MAIN PROJECT</a></li>
              <li><a href="#skill">MY SKILL</a></li>
              <li><a href="#carrear">CARREAR</a></li>
              <li><a href="#contact">CONTACT ME</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;