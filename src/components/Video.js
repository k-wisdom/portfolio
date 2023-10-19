import { useEffect, useRef } from 'react';

function Video({src}){

  // video intersectionObserver 추가
  const videoRef = useRef(null);

  useEffect(() => {
    // 옵션 설정
    const options = {
        root: null,
        threshold: 0.5,
    }
          
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        let type = entry.target.nodeName;
          
          // 뷰포트에있는 target 요소가 true일 때
          if (entry.isIntersecting) {
              if (entry.intersectionRatio > 0) {
                  if (type === 'VIDEO') {
                    // 적용되는 video 자동재생 event
                      entry.target.play();
                  }
              }
          } else {
            // 뷰포트의 영역에서 벗어났을 때
              if (type === 'VIDEO') {
                  entry.target.pause();
              } 
          }
      })
    }, options);
          
  videoObserver.observe(videoRef.current);
  }, [])

  return(
    <video preload="true" autoPlay muted playsInline ref={videoRef} className={"observerItem"} onClick={(e) => e.preventDefault()}>
      <source src={src.webm} type="video/webm"></source>
      <source src={src.mp4} type="video/mp4"></source>
    </video>
  )
}

export default Video;