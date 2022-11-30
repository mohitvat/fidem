/* eslint-disable @next/next/no-img-element */
import React from "react";

const products = () => {
  return (
    <div className="bg-[#284579] overflow-hidden font-montserrat w-full h-full ">
      <div className="flex justify-between  mt-10 ml-20 text-white font-semibold text-6xl">
        <p className="">
          Mobility
          <p className="text-sm pt-2 flex justify-center">
            Roadzen is a global leader in mobility insurance. Our products{" "}
            <br />
            offer asset, usage or behavior based protection and end-to-
            <br />
            end claims for customers on the move.
          </p>
          <button className=" bg-red-600  hover:bg-red-700 rounded-md text-white px-8 py-3 text-sm mt-20">
            Contact Us
          </button>
        </p>

        <img
          className="realtive w-[700px] h-[400px]"
          alt=""
          src="../comp.png"
        />
      </div>
      <div className=" space-y-48 flex-col pt-28 flex items-center">
        <div className=" box-border h-[300px] w-[400px] rounded-xl bg-[#17305B]">
          <img className="w-[250px] h-[150px]" alt="" src="../cars.png" />
        </div>
        <div className="box-border h-[300px] w-[400px] rounded-xl bg-[#17305B]"></div>
        <div className="box-border h-[300px] w-[400px] rounded-xl bg-[#17305B]"></div>{" "}
        <div className="box-border h-[300px] w-[400px] rounded-xl bg-[#17305B]"></div>
      </div>
      <div className="box bg-[#1C345E] w-[1200px] h-[200px] mx-auto rounded mt-32 justify-evenly flex flex-col items-center text-white text-center">
        <div className="space-y-5">
          <p className="text-sm">Need More Details?</p>
          <p className="text-xl">Give Us a Miss Call At</p>
          <p>1800-123-999-888</p>
        </div>
      </div>
    </div>
  );
};

export default products;
