import React from "react";
import ImageSlider from "@/app/components/ImageSlider";

const Introduce = () => {
  const sampleData = [
    {
      image: "/jacob1.png",
      caption: "안녕하세요",
    },
    {
      image: "/jacob2.png",
      caption: "안녕하세요",
    },
    {
      image: "/jacob4.png",
      caption: "안녕하세요",
    },
  ];
  return (
    <div>
      <ImageSlider SliderData={sampleData}></ImageSlider>
    </div>
  );
};

export default Introduce;
