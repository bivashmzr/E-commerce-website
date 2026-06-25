import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Banner from "../Banner/Banner";
import image19 from "../../assets/images/image19.png"
import image20 from "../../assets/images/image20.png"
import image21 from "../../assets/images/image21.png"
import image22 from "../../assets/images/image22.png"
import image23 from "../../assets/images/image23.png"
import image24 from "../../assets/images/image24.png"
import image25 from "../../assets/images/image25.png"
import image26 from "../../assets/images/image26.png"

const AdsBanner = (props) => {
  // Fallback to 4 items if props.items isn't passed
  const desktopItems = props.items || 4;

  return (
    <div className="!py-6 w-full">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
        // Responsive breakpoints map
        breakpoints={{
          // Mobile devices (0px and up)
          0: { 
            slidesPerView: 1, 
            spaceBetween: 10 
          },
          // Small Tablets (576px and up)
          576: { 
            slidesPerView: 2, 
            spaceBetween: 15 
          },
          // Tablets / Small Laptops (768px and up)
          768: { 
            slidesPerView: 2, 
            spaceBetween: 15 
          },
          // Desktops (1024px and up)
          1024: { 
            slidesPerView: desktopItems, // Uses your prop here!
            spaceBetween: 20 
          },
        }}
      >
        <SwiperSlide>
          <Banner img={image19} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={image20} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={image21} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={image22}/>
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={image23} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={image24} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={image25}/>
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={image26} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBanner;