import React from "react";
import { Link } from "react-router-dom";
import image7 from "../../assets/images/image7.png";
import image8 from "../../assets/images/image8.png";
import image9 from "../../assets/images/image9.png";
import image10 from "../../assets/images/image10.png";
import image11 from "../../assets/images/image11.png";
import image12 from "../../assets/images/image12.png";
import image13 from "../../assets/images/image13.png";
import image14 from "../../assets/images/image14.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Catslider = () => {
  return (
    <div className="container !py-4 ">
      <Swiper
        modules={[Pagination]}
        className="mySwiper justify-center flex items-center"
        breakpoints={{
          // Mobile devices (320px and up)
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // Large mobiles/Small tablets (480px and up)
          480: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          // Tablets (768px and up)
          768: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          // Desktops (1024px and up)
          1024: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <Link to="/productlisting">
            <div className="w-full h-[140px] bg-white flex flex-col items-center justify-center !p-3 !rounded-md">
              <img src={image13} alt="Fashion" className="max-h-[60px] w-auto object-contain" />
              <h3 className="text-[15px] font-[400] !mt-3">Fashion</h3>
            </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/">
            <div className="w-full h-[140px] bg-white flex flex-col items-center justify-center !p-3 !rounded-md">
              <img src={image9} alt="Bags" className="max-h-[60px] w-auto object-contain" />
              <h3 className="text-[15px] font-[400] !mt-3">Bags</h3>
            </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/">
            <div className="w-full h-[140px] bg-white flex flex-col items-center justify-center !p-3 !rounded-md">
              <img src={image11} alt="Electronics" className="max-h-[60px] w-auto object-contain" />
              <h3 className="text-[15px] font-[400] !mt-3">Electronics</h3>
            </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/">
            <div className="w-full h-[140px] bg-white flex flex-col items-center justify-center !p-3 !rounded-md">
              <img src={image12} alt="FootWear" className="max-h-[60px] w-auto object-contain" />
              <h3 className="text-[15px] font-[400] !mt-3">FootWear</h3>
            </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/">
            <div className="w-full h-[140px] bg-white flex flex-col items-center justify-center !p-3 !rounded-md">
              <img src={image8} alt="Groceries" className="max-h-[60px] w-auto object-contain" />
              <h3 className="text-[15px] font-[400] !mt-3">Groceries</h3>
            </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/">
            <div className="w-full h-[140px] bg-white flex flex-col items-center justify-center !p-3 !rounded-md">
              <img src={image7} alt="Beauty" className="max-h-[60px] w-auto object-contain" />
              <h3 className="text-[15px] font-[400] !mt-3">Beauty</h3>
            </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/">
            <div className="w-full h-[140px] bg-white flex flex-col items-center justify-center !p-3 !rounded-md">
              <img src={image10} alt="Wellness" className="max-h-[60px] w-auto object-contain" />
              <h3 className="text-[15px] font-[400] !mt-3">Wellness</h3>
            </div>
          </Link>
        </SwiperSlide>
        
        {/* Maintained your md:hidden responsive class here exactly as you had it */}
        <SwiperSlide className="md:hidden">
          <Link to="/">
            <div className="w-full h-[140px] bg-white flex flex-col items-center justify-center !p-3 !rounded-md">
              <img src={image14} alt="Wellness" className="max-h-[60px] w-auto object-contain" />
              <h3 className="text-[15px] font-[400] !mt-3">Wellness</h3>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Catslider;