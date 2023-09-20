import React from "react";
import bnb_img from "../assets/bnbbag.webp";
import load_img from "../assets/load.png";
import vou_img from "../assets/voucher.png";
import win_img from "../assets/win.png";


const TopCards = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 text-center pt-10 pb-8 text-white">
        <div className="p-4 rounded-lg mb-4 relative border-t-4 border-l-2 border-r-2 border-[#93419d] shadow-xl" style={{backgroundColor:"rgba(59,51,100,255)"}}>
          <img
            src={bnb_img}
            alt="Small Image"
            className="w-24 h-24 absolute -top-16 left-1/2 transform -translate-x-1/2"
            />
          <h2 className="text-xl font-semibold mb-1 mt-4">40.00000300 BNB</h2>
          <p className="mb-4 font-light text-xs">ROUND POT SIZE</p>
        </div>
        <div className="bg-white p-4 rounded-lg mb-4 relative border-t-4 border-l-2 border-r-2 border-[#93419d] shadow-xl" style={{backgroundColor:"rgba(59,51,100,255)"}}>
          <img
            src={load_img}
            alt="Small Image"
            className="w-24 h-24 absolute -top-16 left-1/2 transform -translate-x-1/2"
          />
          <h2 className="text-xl font-semibold mb-1 mt-4">Loading...</h2>
          <p className="mb-4 font-light text-xs">TIME LEFT</p>
        </div>
        <div className="bg-white p-4 rounded-lg mb-4 relative border-t-4 border-l-2 border-r-2 border-[#93419d] shadow-xl" style={{backgroundColor:"rgba(59,51,100,255)"}}>
          <img
            src={vou_img}
            alt="Small Image"
            className="w-24 h-24 absolute -top-16 left-1/2 transform -translate-x-1/2"
          />
          <h2 className="text-xl font-semibold mb-1 mt-4 line-through">0.00795 BNB</h2>
          <p className="font-light text-xs" >TICKET PRICE</p>
          <p className="text-sm" >0.00795 BNB (-0.0%)</p>
          <p className="font-light text-xs" >YOUR HOLDER DISCOUNTED PRICE</p>
        </div>
        <div className="bg-white p-4 rounded-lg mb-4 relative border-t-4 border-l-2 border-r-2 border-[#93419d] shadow-xl" style={{backgroundColor:"rgba(59,51,100,255)"}}>
          <img
            src={win_img}
            alt="Small Image"
            className="w-24 h-24 absolute -top-16 left-1/2 transform -translate-x-1/2"
          />
          <h2 className="text-xl font-semibold mb-1 mt-4">1</h2>
          <p className="mb-4 font-light text-xs">ROUND NUMBER</p>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
