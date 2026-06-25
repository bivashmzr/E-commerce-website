import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../HomeSlider/HomeSlider.css";
import image15 from "../../assets/images/image15.png";
import image16 from "../../assets/images/image16.png";



import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const HomeSlider2 = () => {
  return (
    <div className="Homeslider py-5">

        <Swiper
          loop={true}
          speed={1200} // smooth transition
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >

          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
              <img
                src={image15}
                className=" h-full"
                alt=""
              />
<div className="info !absolute !top-0 lg:translate-x-25 md:translate-x-20 left-[45%]   opacity-0 w-[60%] !h-full !z-50 !p-8 !flex !items-center !flex-col justify-center transition-all duration-700">

                <h4 className="lg:text-[18px] md:text-[18px]  text-[12px] font-[500] w-full text-left mb-3">
                  Big Saving Days Sale
                </h4>

                <h2 className="lg:text-[35px] md:text-[30px]  text-[15px] font-[700] w-full">
                  Women Round <br /> Green T-Shirt
                </h2>

                <h3 className="flex items-center !gap-1 lg:text-[18px] md:text-[18px] text-[12px] !font-[600] !w-full text-left !mt-3 !mb-3">
                  Starting At Only
                  <span className="text-[#ff5252] lg:text-[30px] md:text-[22px] text-[13px] font-[700]">
                    $59.00
                  </span>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
              <img
                src={image16}
                className=" h-full object-cover"
                alt=""
              />

<div className="info !absolute !bottom-2 lg:translate-x-17 translate-x-5   opacity-0 lg:w-[50%]  !h-full !z-50 !p-8 !flex !items-center !flex-col justify-center transition-all duration-700">
                <h4 className="lg:text-[18px] md:text-[18px]  text-[11px] font-[500] w-full text-left mb-3">
                  Limited Time Offer
                </h4>

                <h2 className="lg:text-[35px] md:text-[30px] text-[15px] font-[700] w-full">
                  Stylish Summer <br /> Collection
                </h2>

                <h3 className="flex items-center gap-1 lg:text-[18px] md:text-[18px] text-[12px] font-[500] w-full text-left mt-3 mb-3">
                  Starting At Only
                  <span className="text-[#ff5252] lg:text-[30px] md:text-[22px] text-[14px] font-[700]">
                    $49.00
                  </span>
                </h3>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

  );
};

export default HomeSlider2;
