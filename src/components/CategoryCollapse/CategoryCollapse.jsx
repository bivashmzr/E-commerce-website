import React from 'react'
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useState } from "react";



const CategoryCollapse = () => {
  
const [SubmenuIndex, setSubmenuIndex] = useState(null);
const [innersubmenuIndex, setinnersubmenuIndex] = useState(null);

const opensubmenu=(index)=>{
  if(SubmenuIndex===index){
    setSubmenuIndex(null);
  }else{
    setSubmenuIndex(index);
  };
};

const innersubmenu=(index)=>{
  if(innersubmenuIndex===index){
    setinnersubmenuIndex(null);
  }else{
    setinnersubmenuIndex(index);
  }
}
  return (

    <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]" >
                Fashion
              </Button>
            </Link>
            {
            SubmenuIndex=== 0 ?(
              <FaMinus className="absolute top-[10px] right-[15px] " onClick={()=>opensubmenu(0)}/>
            ):(
              <FaPlus className="absolute top-[10px] right-[15px] " onClick={()=>opensubmenu(0)}/>

            )}
              {
                SubmenuIndex===0 &&
                <ul className="submenu w-full !pl-3">
              <li className="list-none relative !pb-[10px] !pt-[10px]">

                  <Link to="/" className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Apparel
                  </Link>
                   {
            innersubmenuIndex=== 0 ?(
              <FaMinus className="absolute top-[10px] right-[15px] " onClick={()=>innersubmenu(0)}/>
            ):(
              <FaPlus className="absolute top-[10px] right-[15px] " onClick={()=>innersubmenu(0)}/>


            )}

                  </li>
              
             {  
             innersubmenuIndex===0 &&
              <ul className="innersubmenu w-full !pl-3 gap-3 flex flex-col">
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link w-full !px-3"
                >
                  Smart Tablet
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link w-full !px-3 transition"
                >
                  Crepe T-Shirt
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link w-full !px-3 transition"
                >
                  Leather watch
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link w-full !px-3 transition"
                >
                  Rolling Diamond
                </Link>
              </li>
              
            </ul>}
            </ul>
              }
          </li>


<li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]" >
                Bags
              </Button>
            </Link>
            {
            SubmenuIndex=== 1 ?(
              <FaMinus className="absolute top-[10px] right-[15px] " onClick={()=>opensubmenu(1)}/>
            ):(
              <FaPlus className="absolute top-[10px] right-[15px] " onClick={()=>opensubmenu(1)}/>


            )}
            

              {
                SubmenuIndex===1 &&
                <ul className="submenu w-full !pl-3">
              <li className="list-none relative">

                  <Link to="/" className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] hover:bg-blue-700">
                    men
                  </Link>
                   {
            innersubmenuIndex=== 1 ?(
              <FaMinus className="absolute top-[10px] right-[15px] " onClick={()=>innersubmenu(1)}/>
            ):(
              <FaPlus className="absolute top-[10px] right-[15px] " onClick={()=>innersubmenu(1)}/>


            )}

                  </li>
              
             {  innersubmenuIndex===1 &&
              <ul className="innersubmenu w-full !pl-3 gap-5 flex flex-col">
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link w-full !px-3"
                >
                  Smart Tablet
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link w-full !px-3 transition"
                >
                  Crepe T-Shirt
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link w-full !px-3 transition"
                >
                  Leather watch
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link w-full !px-3 transition"
                >
                  Rolling Diamond
                </Link>
              </li>
              
            </ul>}
            </ul>
              }
          </li>


        </ul>
      </div>
    

  )
}

export default CategoryCollapse