import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../HomeSlider/HomeSlider.css";
import image6 from "../../assets/images/image6.jpg"
import image2 from "../../assets/images/image2.png"
import image3 from "../../assets/images/image3.png"
import image4 from "../../assets/images/image4.png"
import image5 from "../../assets/images/image5.png"

import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider !py-4">
      <div className="container ">
        <Swiper
          spaceBetween={10}
          navigation={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          modules={[Autoplay,Navigation]}
          className=" sliderHome"
        >
          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden  ">
              <img
                src={image6}
                alt="Banner"
                className="w-full h-35 lg:h-full md:h-full"

              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden">
              <img
                src={image2}                
                alt=""
                className="w-full h-35 lg:h-full md:h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden">
              <img
                src={image3}                
                alt=""
                className="w-full h-35 lg:h-full md:h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden">
              <img
                src={image4}
                alt=""
                className="w-full h-35 lg:h-full md:h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden">
              <img
              src={image5}                
              alt=""
                className="w-full h-35 lg:h-full md:h-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
