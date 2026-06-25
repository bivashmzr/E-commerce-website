import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { MyContext } from '../../App'; // Verify this path matches your folder structure

const Cart = () => {
  const context = useContext(MyContext);
  const cartItems = context?.cartItems || [];

  // Calculate Cart Totals
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
  const cartSubtotal = cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
  const shippingCost = cartItems.length > 0 ? 7.00 : 0.00; 
  const finalTotal = cartSubtotal + shippingCost;

  return (
    <div className="bg-white">
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-10 !font-sans !text-gray-800">
        
        {/* Page Title / Breadcrumb */}
        <div className="!text-gray-500 !text-sm !mb-8 !pb-4 !border-b !border-gray-200">
          <Link to="/" className="hover:!text-[#ff4f4f] !transition-colors">Home</Link> / 
          <span className="!text-gray-900 !font-semibold !ml-1">Shopping Cart</span>
        </div>

        {/* Empty Cart State */}
        {cartItems.length === 0 ? (
          <div className="!flex !flex-col !items-center !justify-center !py-20 !bg-gray-50 !rounded-xl !border !border-gray-200">
            <BsCartX className="!text-6xl !text-gray-300 !mb-4" />
            <h2 className="!text-2xl !font-bold !text-gray-700 !mb-2">Your cart is currently empty</h2>
            <p className="!text-gray-500 !mb-6">Before proceeding to checkout, you must add some products to your shopping cart.</p>
            <Link to="/Productlisting">
              <button className="!bg-[#ff4f4f] !text-white !font-bold !py-3 !px-8 !rounded-md hover:!bg-red-600 !transition-colors !shadow-md">
                RETURN TO SHOP
              </button>
            </Link>
          </div>
        ) : (
          <div className="!flex !flex-col lg:!flex-row !gap-8">
            
            {/* Left Column: Cart Items List */}
            <div className="!flex-1">
              <div className="!flex !items-center !justify-between !mb-6">
                <h2 className="!text-2xl !font-bold !text-gray-900">Your Cart</h2>
                <span className="!text-gray-500">{totalItems} items</span>
              </div>

              <div className="!bg-white !rounded-xl !border !border-gray-200 !shadow-sm !overflow-hidden">
                {/* Table Header (Hidden on Mobile) */}
                <div className="!hidden md:!flex !bg-gray-50 !p-4 !border-b !border-gray-200 !text-sm !font-semibold !text-gray-600">
                  <div className="!w-[50%]">PRODUCT</div>
                  <div className="!w-[15%] !text-center">PRICE</div>
                  <div className="!w-[20%] !text-center">QUANTITY</div>
                  <div className="!w-[15%] !text-right">SUBTOTAL</div>
                </div>

                {/* Cart Items Loop */}
                <div className="!flex !flex-col">
                  {cartItems.map((item, index) => {
                    const mainImage = Array.isArray(item.image) ? item.image[0] : item.image;
                    
                    return (
                      <div key={index} className="!flex !flex-col md:!flex-row !items-center !p-4 !border-b !border-gray-100 last:!border-b-0 hover:!bg-gray-50 !transition-colors">
                        
                        {/* Product Info */}
                        <div className="!w-full md:!w-[50%] !flex !items-center !gap-4 !mb-4 md:!mb-0">
                          <MdOutlineDeleteOutline 
                            className="!text-2xl !text-gray-400 hover:!text-red-500 !cursor-pointer !transition-colors"
                            onClick={() => context.removeFromCart(item.id)}
                          />
                          <div className="!w-[80px] !h-[80px] !bg-gray-100 !rounded-md !flex-shrink-0 !overflow-hidden !border !border-gray-200">
                            <Link to={`/Product/${item.id}`}>
                              <img src={mainImage} alt={item.title} className="!w-full !h-full !object-cover !object-top" />
                            </Link>
                          </div>
                          <div>
                            <Link to={`/Product/${item.id}`}>
                              <h4 className="!text-sm !font-semibold !text-gray-900 hover:!text-[#ff4f4f] !transition-colors !line-clamp-2">
                                {item.title}
                              </h4>
                            </Link>
                            <p className="!text-xs !text-gray-500 !mt-1">Category: {item.category || "Fashion"}</p>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="!w-full md:!w-[15%] !text-center !font-medium !text-gray-900 !mb-4 md:!mb-0">
                          <span className="md:!hidden !text-gray-500 !mr-2">Price:</span>
                          ${item.price.toFixed(2)}
                        </div>

                        {/* Quantity Controls */}
                        <div className="!w-full md:!w-[20%] !flex !justify-center !mb-4 md:!mb-0">
                          <div className="!flex !items-center !border !border-gray-300 !rounded-md !overflow-hidden !bg-white">
                            <span className="!px-4 !py-2 !text-sm !font-semibold !text-gray-700">
                               Qty: {item.qty}
                            </span>
                          </div>
                        </div>

                        {/* Subtotal */}
                        <div className="!w-full md:!w-[15%] !text-right !font-bold !text-[#ff4f4f]">
                          <span className="md:!hidden !text-gray-500 !font-normal !mr-2">Subtotal:</span>
                          ${(item.price * item.qty).toFixed(2)}
                        </div>

                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Cart Totals */}
            <div className="!w-full lg:!w-[380px]">
              <div className="!bg-gray-50 !border !border-gray-200 !rounded-xl !p-6 lg:!sticky lg:!top-6 !shadow-sm">
                <h2 className="!text-xl !font-bold !mb-6 !text-gray-900 !border-b !border-gray-200 !pb-4">Cart Totals</h2>

                <div className="!space-y-4 !text-sm !text-gray-600 !mb-6">
                  <div className="!flex !justify-between">
                    <span>Subtotal</span>
                    <span className="!font-medium !text-gray-900">${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="!flex !justify-between">
                    <span>Shipping</span>
                    <span className="!font-medium !text-gray-900">${shippingCost.toFixed(2)}</span>
                  </div>
                  
                  <div className="!flex !justify-between !pt-4 !mt-4 !border-t !border-gray-200 !font-bold !text-gray-900 !text-xl">
                    <span>Total</span>
                    <span className="!text-[#ff4f4f]">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout">
                  <button className="!w-full !bg-[#ff4f4f] !text-white !font-bold !py-4 !px-4 !rounded-md hover:!bg-red-600 !transition-colors !duration-200 !shadow-md !tracking-wide">
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
                
                <Link to="/Productlisting">
                  <button className="!w-full !mt-3 !bg-white !text-gray-700 !font-semibold !py-3 !px-4 !rounded-md !border !border-gray-300 hover:!bg-gray-50 !transition-colors !duration-200">
                    CONTINUE SHOPPING
                  </button>
                </Link>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;