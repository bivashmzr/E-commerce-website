import React, { useContext, useState } from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Catslider from "../../components/catSlider/catslider";
import { FaShippingFast } from "react-icons/fa";
import AdsBanner from "../../components/AdsBanner/AdsBanner";
import image17 from "../../assets/images/image17.png";
import image27 from "../../assets/images/image27.png";
import image28 from "../../assets/images/image28.png";
import image29 from "../../assets/images/image29.png";
import image30 from "../../assets/images/image30.png";
import image18 from "../../assets/images/image18.png";
import image31 from "../../assets/images/image31.png";
import BlogData from "../../Data/BlogData";
import Blogitems from "../../components/Blogitems/Blogitems";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductSlider from "../../components/Productslider/ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Footer from "../../components/Footer/Footer";
import HomeSlider2 from "../../components/HomeSliderV2/HomeSlider2";
import Bannerv2 from "../../components/BannerV2/Bannerv2";
import { Button } from '@mui/material';
import { MyContext } from "../../App";
import products from "../../Data/UserData";

const Home = () => {
  const context = useContext(MyContext);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <Catslider />
      
      {/* SECTION 1: Top Sliders and Banners */}
      <section className="!py-6 bg-white">
        <div className="container flex flex-col lg:flex-row items-center gap-5">
          <div className="part1 w-full lg:w-[70%]">
            <HomeSlider2 />
          </div>
          <div className="part2 w-full lg:w-[30%]  gap-5 lg:gap-8 flex lg:flex-col md:flex-row flex-col  items-center">
            <Bannerv2 img={image17} title="Buy women with low price" price="999" />
            <Bannerv2 img={image18} title="Buy Men's Footwear low price" price="1500" />
          </div>
        </div>
      </section>

      {/* SECTION 2: Popular Products Tabs */}
      <section className="bg-white !py-2">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center  justify-between gap-4 md:gap-0">
            <div className="leftSec !py-3 !px-2 w-full md:w-[40%]  md:text-left">
              <h2 className="font-[600] text-[20px]">Popular products</h2>
              <p className="font-[400] lg:text-[14px] md:text-[13px]">Do not miss the current offers until the end of March</p>
            </div>

            <div className="rightSec w-full !mb-4 md:w-[60%] flex justify-center md:justify-end max-w-full overflow-hidden">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="FASHION" />
                <Tab label="ELECTRONICS" />
                <Tab label="BAGS" />
                <Tab label="FOOTWEAR" />
                <Tab label="GROCERIES" />
                <Tab label="BEAUTY" />
                <Tab label="WELLNESS" />
                <Tab label="JEWELLERY" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={5} Datas={products} />
        </div>
      </section>

      {/* SECTION 3: Free Shipping Banner */}
      <section className="bg-white !py-7">
        <div className="container">
          <div className="freeShipping w-full !py-4 !px-4 border-2 border-[#ff5252] flex flex-col lg:flex-row items-center justify-between rounded-md gap-4 text-center lg:text-left">
            <div className="col1 flex flex-col sm:flex-row items-center gap-4">
              <FaShippingFast className="text-[40px] sm:text-[50px]" />
              <span className="text-[18px] sm:text-[20px] font-[600]">Free Shipping</span>
            </div>
            <div className="col2 flex items-center">
              <p className="font-[500] mb-0 text-[16px] sm:text-[18px]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <div className="col3 flex items-center">
              <p className="font-bold text-[20px] sm:text-[25px]">-only $200</p>
            </div>
          </div>
          <div className="mt-6">
            <AdsBanner items={3} />
          </div>
        </div>
      </section>

      {/* SECTION 4: Popular Products Sliders */}
      <section className="!py-1 bg-white">
        <div className="container">
          <h2 className="text-[23px] font-[600] !pb-4">Popular Product</h2>
          <ProductSlider items={5} Datas={products} />
          <div className="mt-6">
            <AdsBanner items={4} />
          </div>
        </div>
      </section>

      <section className="!py-1 bg-white">
        <div className="container">
          <h2 className="text-[23px] font-[600] !pb-4">Popular Product</h2>
          <ProductSlider items={5} Datas={products} />
        </div>
      </section>

      {/* SECTION 5: Blog Swiper */}
      <section className="!py-10 bg-white">
        <div className="container max-w-full overflow-hidden">
          <h2 className="text-[23px] font-[600] !pb-4">From The Blog</h2>

          <Swiper
            spaceBetween={10}
            modules={[Navigation, Mousewheel]}
            mousewheel={true}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
           {BlogData.map((data)=>(
<SwiperSlide key={data.id}>
<Blogitems data={data}/>
</SwiperSlide>
           ))}

          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;