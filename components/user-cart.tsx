import React from "react";
import { IoClose } from "react-icons/io5";

const UserCart = () => {
  return (
    <div className="absolute bg-transparent mx-auto w-full flex items-center justify-center">
      <div className="flex flex-col w-[80%] gap-4 mt-3 shadow-2xl rounded-lg">
        <div className="w-full flex items-center justify-center px-5 py-6 border-b-2 border-black/25">
          <div className="flex-1 flex items-center justify-center text-lg font-semibold">
            <h3 className="">Added to shopping bag</h3>
          </div>
          <IoClose className="text-base" />
        </div>
        <div className="flex items-center justify-center w-full border-b-2 pb-3 border-black/25">
          <h3 className="text-black/40">No Items</h3>
        </div>
        <div className="flex flex-col gap-2 pb-3">
          <button className="bg-black text-white w-[95%] mx-auto py-4">
            Checkout
          </button>
          <button className="border-2 border-black boeder w-[95%] mx-auto py-4">
            View shopping bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
