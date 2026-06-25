import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";

const ProductSlider = ({ Datas = [] }) => {
  return (
    <div className="productSlider w-full px-2 md:px-4 py-4">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        // Responsive breakpoints map
        breakpoints={{
          // Mobile devices (320px and up)
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // Tablets (768px and up)
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          // Desktops (1024px and up)
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {Datas.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;