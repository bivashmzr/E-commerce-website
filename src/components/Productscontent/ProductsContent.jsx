import React, { useState, useContext } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import { Button } from '@mui/material';

// Import context from App.jsx (verify the path is correct for your file structure)
import { MyContext } from '../../App'; 

const ProductsContent = ({ item }) => {
  const [qty, setQty] = useState(1);
  const [ProductIndex, setProductIndex] = useState(null);
  
  // Bring in the context
  const context = useContext(MyContext);

  if (!item) return null;

  return (
    <>
      <div className="TextContainer flex flex-col lg:px-10 md:px-3 px-2 gap-3 ">
        
        <h1 className="text-[18px] sm:text-[22px] font-[600] ">
          {item.title}
        </h1>
        
        <div className="flex flex-row gap-3">
          <span className="text-gray-400 text-[13px]">Brands :</span>
          <p className="font-[500] text-black opacity-75">{item.category || "Unknown"}</p>
          <Rating
            name="size-small"
            defaultValue={4} 
            size="small"
            readOnly
          />
          <p className="font-[400] text-black ">Review (12)</p>
        </div>
        
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-start sm:items-center gap-2 ">
          <p className="text-[15px] font-medium flex gap-x-1">Discount:
            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>${item.price + 120} </span>
          </p>
          <p  className='!text-[18px] font-bold'>Price: <span className=" text-[#ff5252] price text-[20px] font-[600]">
            ${item.price}
          </span></p>
          <p className="!text-[14px]">Available In Stock: </p>
          <span className="text-green-600 text-[14px] font-bold">
            {item.stock} Items
          </span>
        </div>
        
        <p className="!mt-2 !pr-6 text-[12px] lg:!text-[16px] !mb-3">
          {item.description || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatum omnis impedit consequuntur? Quidem porro quod architecto explicabo pariatur rerum quisquam distinctio non, sapiente."}
        </p>

        <div className="flex items-center !gap-2">
          <span className="text-[16px] font-bold">SIZE:</span>
          <div className="flex items-center !gap-1 !actions p-0"></div>
          <Button
            className={`!border-[#d1d1d1] !min-w-[50px] !border-1 !text-black ${ProductIndex === 0 ? "!bg-[#ff5252] !text-white" : ""}`}
            onClick={() => setProductIndex(0)}
          >
            S
          </Button>
          <Button
            className={`!border-[#d1d1d1] !min-w-[50px] !border-1 !text-black ${ProductIndex === 1 ? "!bg-[#ff5252] !text-white" : ""}`}
            onClick={() => setProductIndex(1)}
          >
            M
          </Button>
          <Button
            className={`!border-[#d1d1d1] !min-w-[50px] !border-1 !text-black ${ProductIndex === 2 ? "!bg-[#ff5252] !text-white" : ""}`}
            onClick={() => setProductIndex(2)}
          >
            X
          </Button>
          <Button
            className={`!border-[#d1d1d1] !min-w-[50px] !border-1 !text-black ${ProductIndex === 3 ? "!bg-[#ff5252] !text-white" : ""}`}
            onClick={() => setProductIndex(3)}
          >
            XL
          </Button>
        </div>
        <p className="!text-[14px] !my-2  !text-[#000] flex justify-center md:justify-start lg:justify-start">
          Free Shipping (Est. Delivery Time 2-3 Days)
        </p>

        <div className="flex gap-5  ">
          <div className="relative !flex !items-center">
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="w-[130px] h-[50px] !border !rounded-md !px-4  !text-center !outline-none "
            />

            <div className="absolute flex right-0 top-0 flex-col justify-center !w-[28px] !h-[50px] !items-center">
              <button onClick={() => setQty(qty + 1)} className="inputbtn">
                <FaChevronUp className="!text-[10px]" />
              </button>
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="inputbtn"
              >
                <FaChevronDown className="!text-[10px]" />
              </button>
            </div>
          </div>
          
          {/* Linked Add To Cart Button */}
          <Button 
            className="!bg-[#ff5252] !text-white !w-[200px]"
            onClick={() => context.addToCart(item, qty)}
          >
            <MdOutlineShoppingCart />
            ADD TO CART
          </Button>
        </div>

        <div className="flex items-center !gap-4 !mt-4">
          <span className="flex items-center !gap-2 text-[14px] border border-gray-300 !px-1.5 !py-2 lg:!p-3 rounded-md link font-[500] cursor-pointer">
            <FaRegHeart className="text-[18px]" />
            Add to Wishlist
          </span>
          <span className="flex items-center !gap-2 text-[14px] link font-[500] !px-1.5 !py-2 lg:!p-3  rounded-md border border-gray-300 cursor-pointer">
            <IoGitCompareOutline className="text-[18px]" />
            Add to Compare
          </span>
        </div>
      </div>
    </>
  )
}

export default ProductsContent;