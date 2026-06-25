import React, { useState } from "react";
import Button from "@mui/material/Button";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import Catogories from "./catogories";
import "./Navigation.css";

const Navigation = (props) => {
  const [Categories, setCategories] = useState(false);
  const opencategories = () => {
    setCategories(true);
  };

  return (
    <>
      <nav>
        <div className="container grid grid-cols-[30px_1fr] lg:grid-cols-3 md:grid-cols-[50px_1fr] items-center justify-self-start gap-5 !py-2 ">
          <div className="col_1">
            <div className="lg:hidden ">
            <Button
              onClick={opencategories}
              className="!text-black gap-2  w-full flex !justify-start "
            >             
              <CgMenuLeftAlt className="text-[18px]" />
            </Button>
            </div>
<div className="hidden lg:block ">
            <Button
              onClick={opencategories}
              className="!text-black gap-2  w-full flex !justify-start "
            >
              <CgMenuLeftAlt className="text-[18px]" />
              Shop Categories
              <IoIosArrowDown className="text-[14px] " />
            </Button>
            </div>
          </div>
          <div className="col_2  hidden lg:block md:block  ">
            <ul className="alignment flex items-center justify-center">
              <li className="list-none">
                <Link
                  to="/"
                  className="text-[14px] link  transition font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="text-[14px] link  transition font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Fashion
                  </Button>
                </Link>
                <div className="submenue absolute bg-white top-[120%] left-[0%] min-w-[200px] shadow-md">
                  <ul className="!flex-col flex">
                    <li className="list-none w-full relative">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]!py-4">
                        Men
                      </Button>
                      </Link>
                      <div className="submenue absolute bg-white top-[0] left-[100%] min-w-[200px] shadow-md ">
                  <ul className="!flex-col flex">
                    <li className="list-none w-full ">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                        Jeans
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none hover:!text-[#ff5252] !py-4">
                        Footwear
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none hover:!text-[#ff5252] !py-4">
                        Watches
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none hover:!text-[#ff5252] ">
                        pants
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none hover:!text-[#ff5252]">
                        Jackets
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none hover:!text-[#ff5252]">
                        Women
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none hover:!text-[#ff5252]">
                        Kids
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none hover:!text-[#ff5252]">
                        Boys
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="">
                      <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none hover:!text-[#ff5252]">
                        Girls
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link
                  to="/"
                  className="text-[14px] link  transition font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="text-[14px] link  transition font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="text-[14px] link  transition font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="text-[14px] link  transition font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="text-[14px] link  transition font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="text-[14px] link  transition font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]!py-4">
                    Wellness
                  </Button>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className=" md:hidden block lg:block">
          <div className="col_3    flex justify-end">
            <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
          </div>
        </div>
      </nav>
      <Catogories Categories={Categories} setCategories={setCategories} />
    </>
  );
};

export default Navigation;
