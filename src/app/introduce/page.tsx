"use client";
import React, { useEffect, useState } from "react";
import ImageSlider, { SliderProps } from "@/app/components/ImageSlider";
import axios from "axios";
import introduce from "@/app/styles/Introduce.module.scss";

const Introduce = () => {
  const [introduceData, setIntroduceData] = useState<SliderProps[]>([]);

  const getIntroduceData = () => {
    const fetchData = async () => {
      await axios
        .get("/api/introduce")
        .then((res) => setIntroduceData(res.data))
        .catch((err) => console.error(err));
    };
    fetchData();
  };

  useEffect(() => {
    getIntroduceData();
  }, []);

  return <ImageSlider SliderData={introduceData}></ImageSlider>;
};

export default Introduce;
