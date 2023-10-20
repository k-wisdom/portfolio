import styled from "styled-components";
function TopBtn() {

  const topBtnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return(
    <TopButton onClick={() => topBtnClick()}><span className="hide">Top</span></TopButton>
  )
}

const TopButton = styled.button`
  position:fixed;
  z-index:99;
  right:5%;
  bottom:2rem;
  width:3.125rem;
  height:3.125rem;
  border-radius:100%;
  border:1px solid #d3d3d3;
  background:url(${require("../assets/img/right-arrow.png")}) no-repeat center / 60% #fff;
  transform:rotate(-90deg);
  transition:background .3s;
  box-shadow: -1px 1px 11px 0px rgba(0, 0, 0, 0.1);
  &:hover{
    background-color:#e5fc6e;
  }
`;

export default TopBtn;