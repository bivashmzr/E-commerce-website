import React, { useState } from 'react'
import './SideBar.css'
import {Collapse} from 'react-collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Button, Rating } from '@mui/material';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Sidebar = () => {
    const [isOpenCategoryFilter, setisOpenCategoryFilter] = useState(true);
    const [isOpenAvailabilityFilter, setisOpenAvailabilityFilter] = useState(true);
    const [isOpenSizeFilter, setisOpenSizeFilter] = useState(true);

  return (
    <aside className='sidebar'>

{/*----------- DropDown MenuSection -----*/}
        <div className='box '>
        <h3 className='!w-full !mb-2 text-[16px] font-[600] flex text-center  !pr-5'>Shop by Categories 
            <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black ' onClick={()=>setisOpenCategoryFilter(!isOpenCategoryFilter)} >
                 {
            isOpenCategoryFilter=== true ? <FaAngleUp/>: <FaAngleDown/>
        }
                </Button></h3>
        <Collapse isOpened={isOpenCategoryFilter}>
       

        <div className='scroll !px-3 -left-[10px] relative'>
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />}  label="Fashion" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Electronics" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Bags" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Footwear" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Groceries" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Beauty" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Wellness" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Jewellery" size="small" className='w-full' />
      </div>
      </Collapse>

        </div>


{/*----------- DropDown product Available Section -----*/}
        <div className='box !py-2 '>
        <h3 className='!w-full !mb-2 text-[16px] font-[600] flex text-center  !pr-5'>Availability
            <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black ' onClick={()=>setisOpenAvailabilityFilter(!isOpenAvailabilityFilter)} >
                 {
            isOpenAvailabilityFilter=== true ? <FaAngleUp/>: <FaAngleDown/>
        }
                </Button></h3>
        <Collapse isOpened={isOpenAvailabilityFilter}>
       

        <div className='scroll !px-3 -left-[10px] relative'>
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />}  label="Available (17)" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="In Stock (10)" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Not Available (17)" size="small" className='w-full' />
      </div>
      </Collapse>

        </div>


{/*----------- DifferentSize Section --------*/}
        <div className='box !py-2 '>
        <h3 className='!w-full !mb-2 text-[16px] font-[600] flex text-center  !pr-5'>Size
            <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black ' onClick={()=>setisOpenSizeFilter(!isOpenSizeFilter)} >
                 {
            isOpenSizeFilter=== true ? <FaAngleUp/>: <FaAngleDown/>
        }
                </Button></h3>
        <Collapse isOpened={isOpenSizeFilter}>
       

        <div className='scroll !px-3 -left-[10px] relative'>
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />}  label="Small (17)" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Large (10)" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="Medium (17)" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="XL (17)" size="small" className='w-full' />
      <FormControlLabel control={<Checkbox className='!text-[#ff5252]' />} label="XXL (17)" size="small" className='w-full' />
      </div>
      </Collapse>

        </div>


{/*----------- PriceRange Section --------*/}
        <div className='box !py-2 '>
        <h3 className='!w-full !mb-2 text-[16px] font-[600] flex text-center  !pr-5'>Filter By Price</h3>
        <RangeSlider/>
        <div className='flex !pt-4 !pb-2 priceRange'>
          <span className='text-[13px]'>
            From: <strong className='text-dark'>Rs:{100}</strong>
          </span>
          <span className=' !ml-auto text-[13px]'>
            From: <strong className='text-dark'>Rs:{5000}</strong>
          </span>
        </div>
        </div>


{/*----------- Rating Section --------*/}
        <div className='box !py-2 '>
        <h3 className='!w-full !mb-2 text-[16px] font-[600] flex text-center  !pr-5'>Filter By Rating</h3>
        <div className='w-full'>
        <Rating name="size-small" defaultValue={5} size="small" className='!w-full' readOnly />
        </div>
        <div className='w-full'>
        <Rating name="size-small" defaultValue={4} size="small" className='!w-full' readOnly/>
        </div>
        <div className='w-full'>
        <Rating name="size-small" defaultValue={3} size="small" className='!w-full' readOnly/>
        </div>
        <div className='w-full'>
        <Rating name="size-small" defaultValue={2} size="small" className='!w-full' readOnly/>
        </div>
        <div className='w-full'>
        <Rating name="size-small" defaultValue={1} size="small" className='!w-full' readOnly/>
        </div>





        </div>


        </aside>
  )
}

export default Sidebar