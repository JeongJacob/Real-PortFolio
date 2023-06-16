"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import slider from "@/app/styles/ImageSlider.module.scss";
import "@/app/styles/slick.css";

export interface SliderProps {
  image: string;
  caption: string;
}

const ImageSlider = ({ SliderData }: { SliderData: SliderProps[] }) => {
  const settings = {
    dots: true, // 개수 표시 점
    infinite: true, // 무한 캐러셀
    speed: 500, // 다음 컨텐츠 까지의 속도
    slidesToShow: 1, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    centerPadding: "15px", // 중앙 컨텐츠 padding 값
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 5000, // 자동 캐러셀 속도
    draggable: true, // 드래그
    fade: false, // 사라졌다 나타나는 효과
    arrows: false, // 좌,우 버튼
    vertical: false, // 세로 캐러셀
    initialSlide: 1, // 첫 컨텐츠 번호
    pauseOnFocus: true, // focus시 정지
    pauseOnHover: true, // hover시 정지
  };
  return (
    <Slider {...settings}>
      {SliderData &&
        SliderData.map((data) => (
          <div key={data.image}>
            <Image
              src={data.image}
              alt={data.image}
              width={320}
              height={400}
              className={slider.element__image}
            />
            <div className={slider.element__caption__container}>
              <p className={slider.element__caption}>{data.caption}</p>
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default ImageSlider;
