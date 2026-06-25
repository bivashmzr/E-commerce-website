import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/search";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation/Navigation";
import image1 from "../../assets/images/image1.png"

import "./Topstrip.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));
import "./Topstrip.css";
import { MyContext } from "../../App";
const Header = () => {
  const {setOpenCartPannel} = useContext(MyContext)
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-2 border-gray-200 border-b-2">
        <div className="container w-full">
          <div className="grid  lg:grid-cols-2  grid-cols-[400px] items-center justify-between !py-2 md:grid-cols-[400px_1fr]  block md:hidden overflow-hidden ">
            <p className="col1  text-xs lg:text-[12px]  animate-marquee-mobile whitespace-nowrap
             ">
              Get up to 50% of new season style, limited time only
            </p>
            <div className="flex !justify-end">
              <div className="col2 flex items-center justify-end hidden lg:block md:block ">
                <ul className="flex items-center gap-2 ">
                  <li className="list-none ">
                    <Link
                      to="/help-center"
                      className="text-[13px] link font-[500] transition "
                    >
                      Help Center
                    </Link>
                  </li>
                  <li className="list-none ">
                    <Link
                      to="/order-tracking"
                      className="text-[13px] link font-[500] transition"
                    >
                      Order Tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" header py-3 border-gray-200 border-b-[1px] ">
        <div className="headertop container flex items-center justify-between gap-2 h-[70px]">
          <div className="col1 w-[30%]">
            <Link to={"/"}>
              <img src={image1} className="w-40"/>
            </Link>
          </div>
          <div className="col1 lg:w-[40%] md:w-[40%]  w-[65%]  ">
            <Search />
          </div>
          <div className="col1 w-[30%] flex items-center hidden md:block lg:block">
            <ul className=" flex items-center gap-3 justify-end w-full ">
              <li className=" list-none flex gap-3">
                <Link to="/login" className="link trasition text-[15px] font-[500]">
                  Login
                </Link>
                |
                <Link
                  to="/register"
                  className="link trasition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>
              <div className="hidden lg:block">
              <div className=" flex flex-row ">
              <li>
                 <Tooltip title="Compare">
                <IconButton aria-label="cart" >
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoIosGitCompare />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="wishlist">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="cart">
                <IconButton aria-label="cart" onClick={()=> setOpenCartPannel(true)}>
                  <StyledBadge badgeContent={4} color="secondary">
                    <MdOutlineShoppingCart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Navigation/>
    </header>
  );
};

export default Header;
