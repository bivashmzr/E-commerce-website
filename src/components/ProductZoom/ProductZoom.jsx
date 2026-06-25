import React, { useState, useEffect } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ProductZoom.css";

const ProductZoom = ({ Datas }) => {
const [changeImage, setChangeImage] = useState(Datas?.image?.[0] || "");
  const [ActiveIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (Datas?.image?.length) {
      setChangeImage(Datas.image[0]);
    }
  }, [Datas]);

  // Safety check: Don't try to render if Datas or images are missing
  if (!Datas || !Datas.image) return null;

  return (
    <div className="flex gap-3">
      <div className="slider w-[20%]">
        <Swiper
          direction="vertical"
          slidesPerView={3}
          spaceBetween={10}
          navigation={false}
          className="zoomproductssliderthumb"
        >
          {/* We map through the array of string URLs */}
          {Datas.image.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <div className="items">
                <img
                  src={imgUrl} // Use the string directly
                  alt="Product thumbnail"
                  onClick={() => {
                    setChangeImage(imgUrl); // Update main image to this string
                    setActiveIndex(index);
                  }}
                  className={ActiveIndex === index ? "activeThumb" : "inactiveThumb"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="zoomContainer w-[80%]">
        <InnerImageZoom
          zoomType="hover"
          zoomScale={1}
          src={changeImage}
          hideHint
          hasSpacer={false}
        />
      </div>
    </div>
  );
};

export default ProductZoom;