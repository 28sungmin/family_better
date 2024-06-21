import { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImgAtm from "../components/atom/ImgAtm";
import TitleAtm from "../components/atom/TitleAtm";
import TextAtm from "../components/atom/TextAtm";

import mainImg from "../assets/images/main.png";
import mainImg2 from "../assets/images/main2.png";

import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";

import intro1 from "../assets/images/intro1.png";
import intro2 from "../assets/images/intro2.png";
import intro3 from "../assets/images/intro3.png";
import intro4 from "../assets/images/intro4.png";

const MainPg = () => {
  const slideLists = [slide1, slide2, slide3, slide4, slide5];
  // const [slideLists, setslideLists] = useState([slide1, slide2, slide3]);
  const introLists = [intro1, intro2, intro3, intro4];
  // const [intros, setIntros] = useState([intro1, intro2, intro3, intro4]);

  // setActivateImg()는 activateImg 변수의 상태를 업데이트하는 함수
  // const [activateImg, setActivateImg] = useState(null);

  // const imgCheck = (index) => {
  //   setActivateImg(index);
  // };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  };

  const StyledSlider = styled(Slider)`
    .slick-prev {
      left: -40px;
      &:before {
        color: rgb(0, 132, 255);
        font-size: 32px;
      }
    }
    .slick-next {
      right: -30px;
      &:before {
        color: rgb(0, 132, 255);
        font-size: 32px;
      }
    }
  `;

  // const handleNextClick = () => {
  //   setslideLists((sLists) => {
  //     const [first, ...rest] = sLists;
  //     return [...rest, first];
  //   });
  // };

  // const handlePrevClick = () => {
  //   setslideLists((sLists) => {
  //     const lastElement = sLists[sLists.length - 1];
  //     const newList = sLists.slice(0, sLists.length - 1);
  //     return [lastElement, ...newList];
  //   });
  // };

  // const handleImgClick = (index) => {
  //   setslideLists((sLists) => {
  //     const lastElement = sLists[sLists.length - 1];
  //     const newList = sLists.slice(0, sLists.length - 1);
  //     setDirection("prev");
  //     console.log(index);
  //     return [lastElement, ...newList];
  //   });
  // };

  // const handleNextClick = () => {
  //   const firstElement = slideLists[0];
  //   const newList = slideLists.slice(1);
  //   newList.push(firstElement);
  //   console.log(newList);
  //   setslideLists(newList);
  // };

  return (
    <section id="main">
      <div className="title">
        <div className="intro_txt position-relative">
          <TitleAtm titleProp="Welcome" />
          <TitleAtm titleProp="Lee Family" />
          <TextAtm textProp="Without you, I have never existed." />
          <div className="intro_img d-flex">
            {introLists.map((v, i) => (
              <ImgAtm key={i} srcProp={v} altProp={`${v} 이미지`} />
            ))}
          </div>
        </div>
      </div>
      <div className="main_img d-flex justify-content-center align-items-center">
        <ImgAtm srcProp={mainImg} altProp="메인 가족 사진" />
        <ImgAtm srcProp={mainImg2} altProp="메인 가족 사진" />
      </div>
      {/* <div className="nextBtn d-flex justify-content-center">
        <button onClick={handlePrevClick}>이전</button>
      </div>
      <div className="nextBtn d-flex justify-content-center">
        <button onClick={handleNextClick}>다음</button>
      </div> */}
      <div className="slider_all mx-auto ">
        <StyledSlider {...settings}>
          {slideLists.map((v, i) => (
            <div className="slider" key={i}>
              <ImgAtm srcProp={v} />
            </div>
          ))}
        </StyledSlider>
      </div>
    </section>
  );
};
export default MainPg;
