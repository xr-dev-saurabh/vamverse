import React from "react";
import aws from "../assets/aws.png";
import adobe from "../assets/adobe.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import tensor from "../assets/tensor.png";
import unity from "../assets/unity.png";
import unreal from "../assets/unreal.png";
import blender from "../assets/blender.png";
import figma from "../assets/figma.png";
import wall from "../assets/wall12.png";
import three from "../assets/three1.png";
import spark from "../assets/spark.png";
import aframe from "../assets/aframe.png";
import next from "../assets/next.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

const Technology = () => {
  return (
    <div className="justify-center text-center content-center py-8 w-full">
   
    <h5 className="text-gray-600 lg:text-3xl mt-[50px] font-semibold md:text-2xl sm:text-x font-semiboldl">
      TECHNOLOGY
    </h5>

    <p className="lg:text-xl text-gray-600 text-center text-[12px] mx-4  pt-4 lg:mt-4 lg:mx-[100px]">
      8TH WALL, A-FRAME, THREE.JS, REACT, NODE.JS, NEXT.JS, META SPARK, PYTHON, TENSORFLOW, UNITY, UNREAL, BLENDER, AWS.
    </p>

  <div className="max-w-[80%] m-auto mt-16">
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={5}
      spaceBetween={5}
      freeMode={true}
      pagination={false}
      loop={true}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        {" "}
        <img
          src={wall}
          alt="/"
          className="lg:w-[130px] lg:h-[100px] w-[50px] h-[50px]"
        />
      </SwiperSlide>
      <SwiperSlide>
      {" "}
      <img
        src={aframe}
        alt="/"
        className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
      />
    </SwiperSlide>

      <SwiperSlide>
        {" "}
        <img
          src={react}
          alt="/"
          className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={node}
          alt="/"
          className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] "
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={blender}
          alt="/"
          className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] "
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={unity}
          alt="/"
          className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={unreal}
          alt="/"
          className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={tensor}
          alt="/"
          className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={adobe}
          alt="/"
          className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={python}
          alt="/"
          className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
        />
      </SwiperSlide>
      <SwiperSlide>
      {" "}
      <img
        src={three}
        alt="/"
        className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
      />
    </SwiperSlide>
  <SwiperSlide>
  {" "}
  <img
    src={spark}
    alt="/"
    className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
  />
</SwiperSlide>
<SwiperSlide>
{" "}
<img
  src={aws}
  alt="/"
  className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
/>
</SwiperSlide>
<SwiperSlide>
{" "}
<img
  src={next}
  alt="/"
  className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
/>
</SwiperSlide>
<SwiperSlide>
{" "}
<img
src={figma}
alt="/"
className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
/>
</SwiperSlide>
    </Swiper>
  </div>
</div>
  );
};

export default Technology;
