import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { MyContext } from '../../App'; // Make sure this path is correct based on your folder structure

const CheckoutPage = () => {
  // 1. Bring in the context to get cart data
  const context = useContext(MyContext);
  
  // Safety fallback in case context isn't loaded yet
  const cartItems = context?.cartItems || [];

  // 2. Calculate dynamic totals
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
  const cartSubtotal = cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
  const shippingCost = cartItems.length > 0 ? 7.00 : 0.00; 
  const finalTotal = cartSubtotal + shippingCost;

  return (
    <div className='bg-white'>
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-10 !font-sans !text-gray-800">
        
        {/* Page Title / Breadcrumb */}
        <div className="!text-gray-500 !text-sm !mb-8 !pb-4 !border-b !border-gray-200">
          <Link to="/" className="hover:!text-[#ff4f4f] !transition-colors">Home</Link> / 
          <span className="!text-gray-900 !font-semibold !ml-1">Checkout</span>
        </div>

        {/* Empty Cart State */}
        {cartItems.length === 0 ? (
          <div className="!flex !flex-col !items-center !justify-center !py-20 !bg-gray-50 !rounded-xl !border !border-gray-200">
            <BsCartX className="!text-6xl !text-gray-300 !mb-4" />
            <h2 className="!text-2xl !font-bold !text-gray-700 !mb-2">Your cart is empty</h2>
            <p className="!text-gray-500 !mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/Productlisting">
              <button className="!bg-[#ff4f4f] !text-white !font-bold !py-3 !px-8 !rounded-md hover:!bg-red-600 !transition-colors !shadow-md">
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        ) : (
          <div className="!flex !flex-col lg:!flex-row !gap-12">
            
            {/* Left Column: Checkout Forms */}
            <div className="!flex-1">
              <h2 className="!text-2xl !font-bold !mb-6">Billing & Shipping</h2>

              <form className="!space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* 1. Contact Information */}
                <div className="!bg-white !p-6 !rounded-xl !border !border-gray-200 !shadow-sm">
                  <h3 className="!text-lg !font-semibold !mb-4 !text-gray-900">1. Contact Information</h3>
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    required
                    className="!w-full !border !border-gray-300 !rounded-md !p-3 focus:!outline-none focus:!ring-2 focus:!ring-[#ff4f4f] focus:!border-transparent !transition-all" 
                  />
                </div>

                {/* 2. Shipping Address */}
                <div className="!bg-white !p-6 !rounded-xl !border !border-gray-200 !shadow-sm">
                  <h3 className="!text-lg !font-semibold !mb-4 !text-gray-900">2. Shipping Address</h3>
                  <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-4 !mb-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      required
                      className="!w-full !border !border-gray-300 !rounded-md !p-3 focus:!outline-none focus:!ring-2 focus:!ring-[#ff4f4f] focus:!border-transparent !transition-all" 
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      required
                      className="!w-full !border !border-gray-300 !rounded-md !p-3 focus:!outline-none focus:!ring-2 focus:!ring-[#ff4f4f] focus:!border-transparent !transition-all" 
                    />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Street Address" 
                    required
                    className="!w-full !border !border-gray-300 !rounded-md !p-3 !mb-4 focus:!outline-none focus:!ring-2 focus:!ring-[#ff4f4f] focus:!border-transparent !transition-all" 
                  />
                  <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-4">
                    <input 
                      type="text" 
                      placeholder="City" 
                      required
                      className="!w-full !border !border-gray-300 !rounded-md !p-3 focus:!outline-none focus:!ring-2 focus:!ring-[#ff4f4f] focus:!border-transparent !transition-all" 
                    />
                    <input 
                      type="text" 
                      placeholder="Postal Code" 
                      required
                      className="!w-full !border !border-gray-300 !rounded-md !p-3 focus:!outline-none focus:!ring-2 focus:!ring-[#ff4f4f] focus:!border-transparent !transition-all" 
                    />
                  </div>
                </div>

                {/* 3. Payment Method */}
                <div className="!bg-white !p-6 !rounded-xl !border !border-gray-200 !shadow-sm">
                  <h3 className="!text-lg !font-semibold !mb-4 !text-gray-900">3. Payment Details</h3>
                  <div className="!bg-gray-50 !p-5 !border !border-gray-200 !rounded-lg !space-y-4">
                    <input 
                      type="text" 
                      placeholder="Card Number" 
                      required
                      className="!w-full !border !border-gray-300 !rounded-md !p-3 focus:!outline-none focus:!ring-2 focus:!ring-[#ff4f4f] focus:!border-transparent !transition-all" 
                    />
                    <div className="!grid !grid-cols-2 !gap-4">
                      <input 
                        type="text" 
                        placeholder="MM / YY" 
                        required
                        className="!w-full !border !border-gray-300 !rounded-md !p-3 focus:!outline-none focus:!ring-2 focus:!ring-[#ff4f4f] focus:!border-transparent !transition-all" 
                      />
                      <input 
                        type="text" 
                        placeholder="CVC" 
                        required
                        className="!w-full !border !border-gray-300 !rounded-md !p-3 focus:!outline-none focus:!ring-2 focus:!ring-[#ff4f4f] focus:!border-transparent !transition-all" 
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Order Summary */}
            <div className="!w-full lg:!w-[420px]">
              <div className="!bg-gray-50 !border !border-gray-200 !rounded-xl !p-6 lg:!sticky lg:!top-6 !shadow-sm">
                <h2 className="!text-xl !font-bold !mb-6 !text-gray-900">Order Summary</h2>

                {/* Dynamic Product List */}
                <div className="!space-y-4 !mb-6 !border-b !border-gray-200 !pb-6 !max-h-[350px] !overflow-y-auto !pr-2 custom-scrollbar">
                  {cartItems.map((item, index) => {
                    const mainImage = Array.isArray(item.image) ? item.image[0] : item.image;
                    
                    return (
                      <div key={index} className="!flex !justify-between !items-start !gap-4 !bg-white !p-3 !rounded-lg !border !border-gray-100">
                        <div className="!flex !gap-4">
                          <div className="!w-[70px] !h-[70px] !bg-gray-100 !rounded-md !flex-shrink-0 !overflow-hidden !border !border-gray-200">
                            <img 
                              src={mainImage} 
                              alt={item.title} 
                              className="!w-full !h-full !object-cover !object-top" 
                            />
                          </div>
                          <div>
                            <h4 className="!text-sm !font-medium !text-gray-900 !line-clamp-2">
                              {item.title}
                            </h4>
                            <p className="!text-sm !text-gray-500 !mt-1">Qty: {item.qty}</p>
                          </div>
                        </div>
                        <p className="!text-sm !font-semibold !text-[#ff4f4f] !whitespace-nowrap">
                          ${(item.price * item.qty).toFixed(2)}
                        </p>
                      </div>
                    )
                  })}
                </div>

                {/* Dynamic Cost Breakdown */}
                <div className="!space-y-3 !text-sm !text-gray-600 !mb-6">
                  <div className="!flex !justify-between">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="!font-medium !text-gray-900">${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="!flex !justify-between">
                    <span>Shipping</span>
                    <span className="!font-medium !text-gray-900">${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="!flex !justify-between">
                    <span>Taxes (tax incl.)</span>
                    <span className="!font-medium !text-gray-900">$0.00</span>
                  </div>
                  
                  <div className="!flex !justify-between !pt-4 !mt-4 !border-t !border-gray-200 !font-bold !text-gray-900 !text-xl">
                    <span>Total</span>
                    <span className="!text-[#ff4f4f]">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Call to Action */}
                <button className="!w-full !bg-[#ff4f4f] !text-white !font-bold !py-4 !px-4 !rounded-md hover:!bg-red-600 !transition-colors !duration-200 !shadow-md !tracking-wide">
                  PLACE ORDER
                </button>
                
                <p className="!text-xs !text-center !text-gray-500 !mt-4 !flex !items-center !justify-center !gap-1">
                  <MdLockOutline className="!text-gray-400 !text-sm" /> 
                  Secure encrypted payment
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;