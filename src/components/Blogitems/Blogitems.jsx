import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";



const Blogitems = ({data}) => {
  return (
    <div className='imgitem'>
    <div className='rounded-md w-full overflow-hidden cursor-pointer relative'>
      <img src={data.image} alt="" className='w-full trasition-all group-hover:scale-105 group-hover:rotate-1' />
      <span className=' items-center flex bg-[#ff5252] absolute bottom-[15px] right-[15px] !p-1 rounded-md text-white text-[12px] font-[400] gap-1'><IoMdTime /> 5 APRIL 2003</span>
    </div>
    <div className='info !py-3'>
        <h2 className='text-[18px] font-[600]'>{data.title}</h2>
        <p className='text-[16px] font-[400] text-gray-700 !pt-2 !pb-2'>{data.description}</p>
        <Link className='link text-[15px] font-[500] flex inline-flex items-center gap-2'>Read More<MdArrowForwardIos className='flex text-[12px]'/></Link>
    </div>
    </div>
  )
}

export default Blogitems