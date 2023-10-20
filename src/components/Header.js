import React, { useEffect, useState } from 'react';

function Header({menuRef}){

  const [menuFlg, setMenuFlg] = useState(false);
  const [navIndex, setNavIndex] = useState(null);

  const navItems = [
    { idx: 0, name: 'ABOUT ME' },
    { idx: 1, name: 'FEATURED PROJECT' },
    { idx: 2, name: 'MY SKILL' },
    { idx: 3, name: 'WORKS' },
    { idx: 4, name: 'CONTACT' },
  ]
  
  const menuFn = () => {

    const header = document.querySelector('.fixed_header');
    const menuWrap = document.querySelector('#menuWrap');
    const bgWraps = document.querySelectorAll('.menu_background_wrap div');
    const gnb = document.querySelector('.gnb'); 

    if(!menuFlg){
        header.style.zIndex = 99999;
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
        setTimeout(()=>{ header.style.zIndex = 98;},600)
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
  
  useEffect(() => {
    menuRef.current[navIndex]?.scrollIntoView();
    setNavIndex(null)
    
    //메뉴 닫기
    if(menuFlg === true) menuFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuRef, navIndex]);

  return(
    <header className="fixed_header">
      <div className="bx_con_1600 header_content">
        <span>KIMJIHYE</span>
        <nav className="menu_wrap" id="menuWrap">
          <button className="btn_menu" onClick={() => menuFn()}><span className="hide">메뉴</span><i></i><i></i><i></i></button>
          <div className="menu_background_wrap">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className="gnb" style={{display:"none"}}>
              {navItems.map(item => {
                return <li 
                        key={item.idx} 
                        onClick={() => {
                          setNavIndex(item.idx);
                        }}>
                          <span tabIndex="0">{item.name}</span>
                        </li>
              })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;