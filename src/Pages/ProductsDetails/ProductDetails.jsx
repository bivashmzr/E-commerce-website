import { Breadcrumbs, Button } from "@mui/material";
import React, { useState, useEffect } from "react"; // FIX: useEffect is here now
import { Link, useParams } from "react-router-dom"; 
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import "./ProductsDetails.css";
import Box from '@mui/material/Box';
import ProductsContent from "../../components/ProductsContent/ProductsContent";
import TextField from '@mui/material/TextField';

import Datas from "../../Data/UserData"; 

const ProductDetails = () => {
  const [ActiveIndex, setActiveIndex] = useState(0);

  const { id } = useParams();

  // Scroll to top when the ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); 

  const product = Datas.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container !py-20 text-center">
        <h2>Product not found</h2>
        <Link to="/" className="text-red-500 underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <>
      <div className="!py-8 !pb-4">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/Productlisting"
              className="link transition"
            >
              {product.category || "Fashion"}
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className=" bg-white !py-5">
        <div className="container lg:flex  !gap-2">
          
          <div className="productzoomContainer lg:w-[40%] overflow-hidden">
            <ProductZoom Datas={product} />
          </div>

          <div className="lg:w-[60%]">
            <ProductsContent item={product} />
          </div>
        </div>

        <div className="container bg-white !pt-10">
          <div className="flex items-center gap-8 !mb-5 grid grid-cols-3 justify-self-start ">
            <span
              className={`link text-[15px] md:text-[18px] lg:text-[18px]  cursor-pointer font-[500] ${ActiveIndex === 0 ? "text-[#ff5252]" : ""}`}
              onClick={() => setActiveIndex(0)}
            >
              Description
            </span>
            <span
              className={`link text-[15px] md:text-[18px] lg:text-[18px] cursor-pointer font-[500] ${ActiveIndex === 1 ? "text-[#ff5252]" : ""}`}
              onClick={() => setActiveIndex(1)}
            >
              Specifications
            </span>
            <span
              className={`link text-[15px] md:text-[18px] lg:text-[18px] cursor-pointer font-[500] ${ActiveIndex === 2 ? "text-[#ff5252]" : ""}`}
              onClick={() => setActiveIndex(2)}
            >
              Reviews
            </span>
          </div>

          {ActiveIndex === 0 && (
            <div className="shadow-md !w-full !p-5 !px-4 !pr-8 rounded-md">
              <p>
                {product.description || "The best is yet to come! Give your walls a voice with a framed poster. This aesthetic poster will look great on your desk or in an open-space office."}
              </p>

              <h4 className="font-bold !mt-4">Lightweight Design</h4>
              <p>
                Designed with a super light geometric case, the accessory components are slim, casual, and comfortable enough to wear all day and night.
              </p>

              <h4 className="font-bold !mt-4">Free Shipping & Return</h4>
              <p>
                We offer free shipping for products on orders above $50 and offer free delivery for all local orders.
              </p>

              <h4 className="font-bold !mt-4">Money Back Guarantee</h4>
              <p>
                We guarantee our products and you could get back all of your money anytime you want within 30 days.
              </p>
            </div>
          )}

          {ActiveIndex === 1 && (
            <div className=" shadow-md !w-full  rounded-md">
              <div className="!relative !overflow-x-auto !shadow-xs !rounded-base !border !border-default">
                <table className="!w-full !text-sm !text-left rtl:text-right !text-body">
                  <thead className="text-sm text-body border-b rounded-base border-default">
                    <tr>
                      <th scope="col" className="!px-4 !py-3 !font-medium">Stand Up</th>
                      <td scope="col" className="!px-4 !py-3 !font-medium">35"L x 24"W x 37–45"H</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="!bg-white !border-b border-default">
                      <th scope="row" className="!px-4 !py-4 !font-medium !text-heading !whitespace-nowrap">Folded (w/o wheels)</th>
                      <td className=" !py-4">32.5"L x 18.5"W x 16.5"H</td>
                    </tr>
                    <tr className="!border-b !border-default">
                      <th scope="row" className="!px-4 !py-4 !font-medium !text-heading !whitespace-nowrap">Door Pass Through</th>
                      <td className=" !py-4">24"</td>
                    </tr>
                    <tr className="!border-b !border-default">
                      <th scope="row" className="!px-4 !py-4 !font-medium !text-heading !whitespace-nowrap">Frame</th>
                      <td className="!py-4">Aluminum</td>
                    </tr>
                    <tr className="!border-b !border-default">
                      <th scope="row" className="!px-4 !py-4 !font-medium !text-heading !whitespace-nowrap">Weight Capacity</th>
                      <td className=" !py-4">{product.stock ? `${product.stock} items left` : "60 LBS"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {ActiveIndex === 2 && (
            <div className="shadow-md !w-full !px-3 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px] !mb-4 ">Customer questions & answers</h2>

                <div className="reviewScroll w-full  flex flex-col gap-4">
                  <div className="review  w-full items-center justify-between">
                    <div className="info   flex  items-center gap-3">
                      <div className="img w-[100px] h-[100px] min-w-[80px] rounded-full">
                        <img src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg" className="w-full h-full object-cover" alt="User Avatar" />
                      </div>
                      <div className="lg:w-[80%] w-full">
                        <h4 className="!text-[16px] font-bold">Verma</h4>
                        <h5 className="!text-[14px] text-gray-400">2026-02-15</h5>
                        <p className="!mt-1 !mb-0 text-sm">Amazing quality fabric! Color matches the picture perfectly.</p>
                                            <Rating name="read-only-rating" defaultValue={4} size="small" readOnly />

                      </div>
                    </div>
                  </div>

                  <div className="reviewform bg-[#f1f1f1] !p-4 rounded-md flex flex-col !my-4">
                    <h2 className="text-[18px]">Add a review</h2>
                    
                    <form className="w-full !pt-5" onSubmit={(e) => e.preventDefault()}>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Write a review..."
                        className="w-full"
                        multiline
                        rows={4}
                      />
                      <br/><br/>
                      <Rating name="add-rating" defaultValue={4} />

                      <div className="flex items-center !mt-4">
                        <Button type="submit" className="btn-org">Submit Review</Button>
                      </div>
                    </form>
                  </div> 
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;



























