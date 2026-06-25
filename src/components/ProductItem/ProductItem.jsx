import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { FaRegHeart } from "react-icons/fa";
import { CgMaximizeAlt } from "react-icons/cg";
import { IoGitCompareOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { MyContext } from "../../App";

const ProductItem = ({ item }) => {
  const context = useContext(MyContext);

  if (!item) return null;

  const mainImage = Array.isArray(item.image) ? item.image[0] : item.image;

  return (
    <div className="productItem w-full flex flex-col rounded-md overflow-hidden border border-[#c0c0c0] group h-[430px]">
      
      {/* Responsive Image Wrapper Height */}
      <div className="imgWrapper w-full  h-[300px]  overflow-hidden relative">
        <Link to={`/Product/${item.id}`} className="link w-full h-full block">
          {/* Main Image - Removed lg:w-full so it fills the container on mobile */}
          <img
            src={mainImage}
            className="w-full h-full max-h-full object-cover object-top transition-all duration-700"
            alt={item.title}
          />

          {/* Hover Image */}
          <img
            src={item.hoverImg}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
            alt={item.title}
          />
        </Link>

        {/* Discount Badge */}
        <span className="absolute top-[8px] left-[8px] !px-2 !py-1 z-50 text-[10px] md:text-[12px] font-bold rounded bg-[#FF5252] text-white">
          50%
        </span>

        {/* Actions - Scaled down slightly for mobile */}
        <div className="actions absolute top-[15px] md:top-[20px] right-[-60px] z-[1000] flex flex-col gap-2 transition-all duration-500 group-hover:right-[10px]">
          <Link to="/">
            <Button 
              className="!w-[30px] !h-[30px] md:!w-[35px] md:!h-[35px] !min-w-[30px] md:!min-w-[35px] !rounded-full !bg-white hover:!bg-[#FF5252] group" 
              onClick={() => context.openProductPopup(item)}
            >
              <CgMaximizeAlt className="!text-black group-hover:text-white text-[16px] md:text-[20px]" />
            </Button>
          </Link>
          <Link to="/">
            <Button className="!w-[30px] !h-[30px] md:!w-[35px] md:!h-[35px] !min-w-[30px] md:!min-w-[35px] !rounded-full !bg-white hover:!bg-[#FF5252] group">
              <IoGitCompareOutline className="!text-black group-hover:text-white text-[16px] md:text-[20px]" />
            </Button>
          </Link>
          <Link to="/">
            <Button className="!w-[30px] !h-[30px] md:!w-[35px] md:!h-[35px] !min-w-[30px] md:!min-w-[35px] !rounded-full !bg-white hover:!bg-[#FF5252] group">
              <FaRegHeart className="!text-black group-hover:text-white text-[16px] md:text-[20px]" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Info Section - Responsive Font Sizes and Padding */}
      <div className="info !px-2 !py-2 md:!px-3 md:!py-3 flex-1 flex flex-col justify-between">
        <div>
          <h6 className="text-[12px] md:text-[14px]">
            <Link to="/" className="link">Soylet Greene</Link>
          </h6>

          {/* line-clamp-2 keeps titles from breaking the card heights if one is too long */}
          <h3 className="text-[14px] md:text-[18px] !mt-1 md:!mt-2 font-[500] line-clamp-2 leading-tight">
            <Link to={`/Product/${item.id}`} className="link">
              {item.title}
            </Link>
          </h3>
        </div>

        <div className="mt-1 md:mt-auto">
          {/* Scaled Rating Stars */}
          <div className="mt-1">
             <Rating defaultValue={4} size="small" readOnly sx={{ fontSize: { xs: "14px", md: "1.25rem" } }} />
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-3 !mt-1 md:!mt-2">
            <span className="line-through text-gray-400 text-[12px] md:text-[14px]">$58.00</span>
            <span className="text-[#FF5252] font-[600] text-[14px] md:text-[16px]">${item.price}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductItem;