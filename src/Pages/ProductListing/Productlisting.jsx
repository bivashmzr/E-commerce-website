import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/SideBar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom'; 
import { IoGridSharp } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductItemlistView from '../../components/ProductItemlistView/ProductItemlist';
import Pagination from '@mui/material/Pagination';
import { Button } from '@mui/material';
import { LuMenu } from 'react-icons/lu';
import { IoIosArrowDown } from "react-icons/io";

import Datas from "../../Data/UserData"; 

const Productlisting = () => {
  const [IsItemView, setIsItemView] = useState('grid');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  // --- PAGINATION STATE & LOGIC ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentItems = Datas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Datas.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0); 
  };
  // --------------------------------

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className='!py-8 !pb-0'>
      <div className="container px-4 md:px-0"> {/* Added responsive padding */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className='link transition hover:text-[#ff5252] text-black'>
            Home
          </Link>
          <Link to="/Productlisting" className='link transition hover:text-[#ff5252] text-black'>
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      
      <div className='bg-white !p-3 !mt-4'>
        {/* Changed to flex-col for mobile, md:flex-row for tablet/desktop */}
        <div className='flex flex-col md:flex-row container !gap-4'>
          
          {/* Made sidebar full width on mobile, 25% on tablet, 20% on desktop */}
          <div className='slideWrapper w-full md:w-[25%] lg:w-[20%] !h-full bg-white'>
            <Sidebar/>
          </div>
          
          {/* Made content full width on mobile, 75% on tablet, 80% on desktop */}
          <div className="right-content w-full md:w-[75%] lg:w-[80%] !py-3">
            
            {/* Top filter bar: stacked on mobile, row on md+ */}
            <div className='bg-[#f1f1f1] !p-3 !pb-4 rounded-md !mb-3 flex flex-col md:flex-row items-center justify-between gap-4'>
              
              <div className='col1 w-full md:w-auto flex flex-col sm:flex-row items-center !gap-3 ItemView justify-between md:justify-start'>
                <div className='flex gap-2'>
                  <Button  
                    className={`flex !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${IsItemView === 'list' ? 'active !bg-gray-300' : ''} `} 
                    onClick={() => setIsItemView('list')}
                  >
                    <LuMenu className='text-[rgba(0,0,0,0.7)]'/>
                  </Button>
                  <Button 
                    className={`flex !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${IsItemView === 'grid' ? 'active !bg-gray-300' : ''} `} 
                    onClick={() => setIsItemView('grid')}
                  >
                    <IoGridSharp className='text-[rgba(0,0,0,0.7)]'/>
                  </Button>
                </div>
                <span className='text-[14px] font-[500] text-[rgba(0,0,0,0.7)] text-center sm:text-left'>
                  Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, Datas.length)} of {Datas.length} products
                </span>
              </div>

              <div className='col2 w-full md:w-auto flex items-center justify-between md:justify-end !gap-3 md:!pr-4'>
                <span className='text-[14px] font-[500] text-[rgba(0,0,0,0.7)]'>
                  Sort by:
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className='!bg-white !text-black !capitalize border !border-[#000] !gap-2'
                >
                  <span>Relevance</span>
                  <IoIosArrowDown />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      'aria-labelledby': 'basic-button',
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>Sales highest to lowest</MenuItem>
                  <MenuItem onClick={handleClose}>Relevance</MenuItem>
                  <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                  <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                  <MenuItem onClick={handleClose}>Price, low to high</MenuItem>
                  <MenuItem onClick={handleClose}>Price, high to low</MenuItem>
                </Menu>
              </div>
            </div>

            {/* Responsive grid: 1 col mobile, 2 tablet, 3 small desktop, 4 large desktop */}
            <div className={`grid ${IsItemView==="grid" ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-4`}>
              {currentItems.map((item) => (
                IsItemView === 'grid' ? (
                  <ProductItem key={item.id} item={item} />
                ) : (
                  <ProductItemlistView key={item.id} item={item} />
                )
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center !mt-10">
                <Pagination 
                  count={totalPages} 
                  page={currentPage} 
                  onChange={handlePageChange} 
                  variant="outlined" 
                  shape="rounded" 
                  className='!text-black'
                />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Productlisting;