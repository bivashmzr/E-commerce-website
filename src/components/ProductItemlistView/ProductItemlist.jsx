import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Sidebar/SideBar.css";
import Rating from "@mui/material/Rating";
import { FaRegHeart } from "react-icons/fa";
import { CgMaximizeAlt } from "react-icons/cg";
import { IoGitCompareOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MyContext } from "../../App";

const ProductItemlist = ({ item }) => {
  const context = useContext(MyContext);

  // Fallback in case data doesn't load immediately
  if (!item) return null;

  // Handle the array structure for your images
  const mainImage = Array.isArray(item.image) ? item.image[0] : item.image;

  return (
    <div className="flex items-center productItem rounded-md overflow-hidden border border-[#c0c0c0] group">
      
      <div className="imgWrapper w-[25%] h-[240px] overflow-hidden relative">
        {/* Main Image */}
        <img
          src={mainImage}
          className="w-full h-full object-cover object-top transition-all duration-700"
          alt={item.title}
        />
        

        {/* Hover Image */}
        <img
          src={item.hoverImg}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          alt={item.title}
        />

        {/* Discount */}
        <span className="absolute top-[10px] left-[10px] !px-2 !py-1 z-50 text-[12px] font-bold rounded bg-[#FF5252] text-white">
          50%
        </span>

        {/* Actions */}
        <div className="actions absolute top-[20px] right-[-60px] z-1000 flex flex-col gap-2 transition-all duration-500 group-hover:right-[10px]">
          <Button
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-[#FF5252] group"
            onClick={() => context.openProductPopup(item)}
          >
            <CgMaximizeAlt className=" !text-black group-hover:text-white" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-[#FF5252] group">
            <IoGitCompareOutline className="!text-black group-hover:text-white" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-[#FF5252] group">
            <FaRegHeart className="!text-black group-hover:text-white" />
          </Button>
        </div>
      </div>

      <div className="info !px-3 !py-3 w-[75%] ">
        <h6 className="text-[15px]">
          <Link to="/" className="link">
            {item.category || "Brand Name"}
          </Link>
        </h6>

        <h3 className="text-[18px] !mt-2 font-[500]">
            {item.title}
        </h3>

        <Rating defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-3 !mt-2">
          <span className="line-through text-gray-500">$58.00</span>
          <span className="text-[#FF5252] font-[600] text-[16px]">${item.price}</span>
        </div>
        
        <Button className="btn-org !gap-2">
          <MdOutlineShoppingCart className="text-[20px]" />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItemlist;