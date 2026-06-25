import React from 'react'
import './search.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5]  rounded-[5px] relative flex items-center'>
      <input type="text" placeholder='Search for Product...' className='h-[35px] w-full focus:outline-none  bg-inherit '/>
      <Button className=" !absolute right-[5px] !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black"><IoSearch className="text-black text-[22px]" /></Button>
    </div>
  )
}

export default search