import { LiaShippingFastSolid } from "react-icons/lia";
import { FaFacebookF, FaYoutube, FaPinterestP, FaInstagram } from "react-icons/fa";

import { PiKeyReturn } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { Icon } from "@mui/material";






const Footer = () => {
  return (
    <div className='!pt-10 bg-[#fafafa]'>
      <div className="hidden lg:block">
        <div className='container !flex flex-row justify-center items-center  ' >
           
            <div className='flex flex-col items-center justify-center w-[15%] group'>
            <LiaShippingFastSolid className="text-[50px]  transition duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1"/>
            <h3 className="text-[17px] font-[600] !pb-1">Shopping Free</h3>
            <p>For all order Over $100</p>
            </div>

            <div className='flex flex-col items-center justify-center w-[15%] group'>
            <PiKeyReturn className="text-[50px] transition duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1"/>
            <h3 className="text-[17px] font-[600] !pb-1">30 Days Returns</h3>
            <p>For an Exchange Product</p>
            </div>

            <div className='flex flex-col items-center justify-center w-[15%] group'>
            <IoWalletOutline className="text-[50px] transition duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1"/>
            <h3 className="text-[17px] font-[600] !pb-1">Secured Payment</h3>
            <p>Payment Cards Accepted</p>
            </div>
            <div className='flex flex-col items-center justify-center w-[15%] group'>
            <GoGift className="text-[50px] transition duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1"/>

            <h3 className="text-[17px] font-[600] !pb-1">Special Gifts</h3>
            <p>Our First Product Order</p>
            </div>
            <div className='flex flex-col items-center justify-center w-[15%] group'>
            <BiSupport className="text-[50px] transition duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1"/>

            <h3 className="text-[17px] font-[600] !pb-1">Support 24/7</h3>
            <p>Contact us Anytime</p>
            </div>
        </div>
        </div>

<div className="border-t border-[#e1e4eb] !mt-10 container mx-auto !py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  !gap-10">

        {/* Contact */}
        <div className="border-r border-[#e1e3e8]">
          <h3 className="text-[18px] font-[600] !mb-4">Contact us</h3>

          <p className="text-gray-600 text-[14px]">
            Classyshop - Mega Super Store
          </p>
          <p className="text-gray-600 text-[14px]">
            507-Union Trade Centre France
          </p>

          <p className="!mt-4 text-gray-600 text-[14px]">
            sales@yourcompany.com
          </p>

          <p className="text-[#ff5252] text-[20px] font-[600] !mt-2">
            (+91) 9876-543-210
          </p>

          <div className="flex items-center !gap-3 !mt-4">
            <span className="!p-2 text-[30px]">
        <FaRegMessage className="text-[#ff5252]" />
            </span>
            <div>
              <p className="font-[600]">Online Chat</p>
              <p className="text-gray-500 text-[13px]">Get Expert Help</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="hidden lg:block md:block">
          <h3 className="text-[18px] font-[600] !mb-4">Products</h3>
          <ul className="!space-y-2 text-gray-600 !text-[14px]">
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[18px] font-[600] !mb-4">Our company</h3>
          <ul className="!space-y-2 text-gray-600 text-[14px]">
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms and conditions of use</li>
            <li>About us</li>
            <li>Secure payment</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[18px] font-[600] !mb-4">Subscribe to newsletter</h3>
          <p className="text-gray-600 text-[14px] !mb-4">
            Subscribe to our latest newsletter to get news about special discounts.
          </p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="border w-full !p-3 rounded-md !mb-4"
          />

          <button className="bg-[#ff5252] text-white !px-6 !py-3 rounded-md font-[600]">
            SUBSCRIBE
          </button>

          <div className="flex items-center !gap-2 !mt-4 text-[13px] text-gray-600">
            <input type="checkbox" />
            <span>
              I agree to the terms and conditions and the privacy policy
            </span>
          </div>
        </div>

      </div>

      <footer className="border-t  border-[#e1e4eb] !py-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-3 lg:gap-0 items-center justify-between">

        {/* LEFT — SOCIAL ICONS */}

        <div className="flex gap-3">
          <Icon  className="border-2 border-[#e1e4eb] !w-[45px] !h-[45px] rounded-full items-center !justify-center   !flex "><FaFacebookF /></Icon>
          <Icon className="border-2 border-[#e1e4eb] !w-[45px] !h-[45px] rounded-full items-center !justify-center   !flex "><FaYoutube /></Icon>
          <Icon className="border-2 border-[#e1e4eb] !w-[45px] !h-[45px] rounded-full items-center !justify-center   !flex "><FaPinterestP /></Icon>
          <Icon className="border-2 border-[#e1e4eb] !w-[45px] !h-[45px] rounded-full items-center !justify-center   !flex "><FaInstagram /></Icon>
          
        </div>

        {/* CENTER — COPYRIGHT */}
        <p className="!text-sm text-gray-600 flex lg:!justify-center">
          © 2024 - Ecommerce Template
        </p>

        {/* RIGHT — PAYMENT IMAGES */}
        <div className="flex gap-2 lg:justify-end">
          <img src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png" className="h-6" />
          <img src="https://ecommerce-frontend-view.netlify.app/visa.png" className="h-6" />
          <img src="https://ecommerce-frontend-view.netlify.app/master_card.png" className="h-6" />
          <img src="https://ecommerce-frontend-view.netlify.app/american_express.png" className="h-6" />
          <img src="https://ecommerce-frontend-view.netlify.app/paypal.png" className="h-6" />
        </div>
</div>
    </footer>
  
</div>
    
  )
}

export default Footer