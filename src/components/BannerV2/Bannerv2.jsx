import React from "react";
import { Link } from "react-router-dom";

const Bannerv2 = ({ img, title, price }) => {
  return (
    <div className="w-full rounded-xl p-5 flex items-center justify-between gap-4">
      
      {/* Image */}
      <div className="w-full relative">
        <img src={img} className="w-full h-[220px] " />
      </div>

      {/* Text */}
      <div className="     md:translate-x-48 translate-x-38 w-[170px] absolute">
        <h3 className="text-[18px] font-semibold leading-tight">
          {title}
        </h3>

        <p className="text-red-500 text-[20px] font-bold mt-2">
          ₹{price}
        </p>
        <Link to="">
        <div className="mt-3 underline text-sm font-semibold link">
          SHOP NOW
        </div></Link>
      </div>

    </div>
  );
};

export default Bannerv2;
