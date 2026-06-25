import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Header from "./components/Header/Topstrip";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Productlisting from "./Pages/ProductListing/Productlisting";
import ProductDetails from "./Pages/ProductsDetails/ProductDetails";
import ProductsContent from "./components/Productscontent/productsContent";
import Dialog from "@mui/material/Dialog";
import Login from "./Pages/Login/Login";
import Register from "./components/Register/Register";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "./App.css";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Datas from "./Data/UserData";
import ProductItem from "./components/ProductItem/ProductItem";
import ProductItemlist from "./components/ProductItemlistView/ProductItemlist";
import ProductSlider from "./components/Productslider/ProductSlider";
import ProductZoom from "./components/ProductZoom/ProductZoom";

const MyContext = createContext();

const App = () => {
  const [openCartPannel, setOpenCartPannel] = useState(false);
  const toggleCartPannel = (newOpen) => () => {
    setOpenCartPannel(newOpen);
  };
  
  const [openProductDetails, setOpenProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  // --- CART STATE & LOGIC ---
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty) => {
    setCartItems((prevItems) => {
      // Check if item is already in cart
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id);
      
      if (existingItemIndex > -1) {
        // If it exists, just update the quantity
        const updatedCart = [...prevItems];
        updatedCart[existingItemIndex].qty += qty;
        return updatedCart;
      } else {
        // If it's new, add it to the array
        return [...prevItems, { ...product, qty }];
      }
    });
    // Automatically open the cart drawer when an item is added
    setOpenCartPannel(true);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };
  // --------------------------

  const openProductPopup = (product) => {
    setSelectedProduct(product);
    setActiveImage(product.image);
    setOpenProductDetails(true);
  };

  const ProductDetailshandleClose = () => {
    setOpenProductDetails(false);
    setSelectedProduct(null);
    setActiveImage("");
  };

  const value = {
    setOpenCartPannel,
    setOpenProductDetails,
    openProductPopup,
    cartItems,
    addToCart,
  };

  // Calculate Cart Totals
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
  const cartSubtotal = cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
  const shippingCost = cartItems.length > 0 ? 7.00 : 0.00; 
  const finalTotal = cartSubtotal + shippingCost;

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={value}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productlisting" element={<Productlisting />} />
            <Route path="/Product/:id" element={<ProductDetails />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />

          {/* PRODUCT POPUP */}
          <Dialog
            open={openProductDetails}
            onClose={ProductDetailshandleClose}
            maxWidth="lg"
          >
            <div className="!bg-white !rounded-xl !p-6 !relative">
              <button
                onClick={ProductDetailshandleClose}
                className="!absolute !right-4 !top-4 !text-2xl hover:!text-red-500"
              >
                ✕
              </button>

              <div className="flex flex-row w-full">
                <div className="w-2/5">
                  {selectedProduct && (
                    <ProductZoom Datas={selectedProduct} />
                  )}
                </div>
                <div className="w-3/5">
                  <ProductsContent item={selectedProduct}/>
                </div>
              </div>
            </div>
          </Dialog>

          {/* CART DRAWER */}
          <Drawer
            open={openCartPannel}
            onClose={toggleCartPannel(false)}
            anchor={"right"}
            className="Cartpannel"
          >
            <div className="flex items-center  justify-between !py-3 !px-4 border-b border-[rgba(32,32,32,0.1)] ">
              <h4>Shopping Cart ({totalItems})</h4>
              <IoCloseSharp
                className="text-[20px] cursor-pointer"
                onClick={() => setOpenCartPannel(false)}
              />
            </div>

            <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden">
              
              {/* Render dynamic cart items */}
              {cartItems.length === 0 ? (
                <div className="!p-5 text-center text-gray-500">
                  Your cart is empty.
                </div>
              ) : (
                cartItems.map((item, index) => {
                  const mainImage = Array.isArray(item.image) ? item.image[0] : item.image;
                  
                  return (
                    <div key={index} className="cartItems w-full flex items-center gap-3 !px-2 border-b border-[rgba(33,32,32,0.1)] !pb-2 mt-2">
                      <div className="img w-[25%] flex h-[80px] ">
                        <img
                          src={mainImage}
                          alt={item.title}
                          className="w-full object-cover !rounded-md object-top"
                        />
                      </div>

                      <div className="info w-[75%] !pr-5 !relative">
                        <h4 className="text-[14px] font-[500] ">
                          {item.title}
                        </h4>
                        <p className="flex items-center gap-5 !mt-2 !mb-2">
                          <span>
                            <span> Qty: </span>{item.qty}
                          </span>
                          <span className="text-[#ff5252] font-bold">Price :${item.price}</span>
                        </p>
                        <MdOutlineDeleteOutline 
                          className="absolute !top-[10px] !right-[8px] cursor-pointer text-[20px] hover:text-red-500 transition-all" 
                          onClick={() => removeFromCart(item.id)}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <br />

            <div className="bottomSec absolute bottom-[10px] left-[10px] !w-full !pr-5 ">
              <div className="bottomInfo !py-3 w-full !border-t border-[rgba(0,0,0,0.1)] flex flex-col items-center justify-between">
                <div className="flex items-center justify-between w-full">
                  <span>{totalItems} item(s)</span>
                  <span className="text-[#ff2525] font-bold">${cartSubtotal.toFixed(2)} </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span>Shipping</span>
                  <span className="text-[#ff2525] font-bold">${shippingCost.toFixed(2)} </span>
                </div>
              </div>

              <div className="bottomInfo !py-3 w-full border-t border-[rgba(0,0,0,0.1)] flex flex-col items-center justify-between">
                <div className="flex items-center justify-between w-full">
                  <span>Total (tax excl.)</span>
                  <span className="text-[#ff2525] font-bold">${finalTotal.toFixed(2)} </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span>Total (tax incl.)</span>
                  <span className="text-[#ff2525] font-bold">${finalTotal.toFixed(2)} </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span>Taxes: (tax incl.)</span>
                  <span className="text-[#ff2525] font-bold">$0.00 </span>
                </div>
                <div className="flex items-center justify-between w-full !px-3 gap-3 !mt-3">
                  <Link to="/cart" className="w-[50%]" onClick={() => setOpenCartPannel(false)}>
                    <Button className="btn-org btn-lg w-full">View Cart</Button>
                  </Link>
                  <Link to="/checkout" className="w-[50%]" onClick={() => setOpenCartPannel(false)}>
                    <Button className="btn-org btn-lg w-full">Checkout</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Drawer>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
export { MyContext };