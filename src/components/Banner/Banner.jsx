import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ img }) => {
  return (
    <div className="w-full rounded-xl overflow-hidden group">
        <Link to="/">
<img
        src={img}
        alt=""
        className="w-full h-[230px] object-cover transition-all group-hover:scale-105"
      />  </Link>  </div>
      
  );
};

export default Banner;
